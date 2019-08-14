const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/userModel");

router.get("/users/get", async (req, res) => {
  try {
    if (req.header("Revisit")) {
      const user = await User.findById(req.header("Revisit"));

      if (!user) {
        res.statusMessage = "Invalid session ID!";
        return res.status(400).end();
      }

      return res.status(200).send(user);
    }

    if (req.header("email")) {
      const user = await User.findOne({ email: req.header("email") });

      if (!user || !bcrypt.compareSync(req.header("password"), user.password)) {
        res.statusMessage = "Invalid email or password!";
        return res.status(400).end();
      }

      return res.status(200).send(user);
    }

    const users = await User.find(
      {},
      { avatar: 1, fullName: 1, email: 1, status: 1, removeRequest: 1 }
    );

    return res.status(200).send(users);
  } catch (error) {
    console.log("Error: " + error);
    res.statusMessage = "Internal server error!";
    return res.status(500).end();
  }
});

router.delete("/users/delete", async (req, res) => {
  try {
    await User.deleteMany({ _id: req.body._id });

    return res.status(200).send(req.body);
  } catch (error) {
    console.log("Error: " + error);
    res.statusMessage = "Internal server error!";
    return res.status(500).end();
  }
});

router.post("/users/addUser", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user) {
      res.statusMessage = "User with this email already exists!";
      return res.status(400).send();
    }

    const hashPassword = bcrypt.hashSync(req.body.password, 10);
    user = await User.create({
      email: req.body.email,
      fullName: req.body.fullName,
      password: hashPassword
    });

    console.log("New user: " + user);
    return res.status(200).send(user);
  } catch (error) {
    console.log("Error: " + error);
    res.statusMessage = "Internal server error!";
    return res.status(500).end();
  }
});

router.put("/users/:userId/change", async (req, res) => {
  try {
    if (req.body.deletedTicket) {
      const ticket = req.body.deletedTicket;

      const tickets = await User.findOne(
        { _id: req.params.userId },
        { tickets: 1, _id: 0 }
      );

      await User.updateOne(
        { _id: req.params.userId },
        {
          tickets: tickets.tickets.filter(item => item._id !== ticket)
        }
      );
      return res.status(200).send(req.body);
    }

    if (req.body.buyTicket) {
      const ticket = req.body.buyTicket;

      const userInfo = await User.findById(
        { _id: req.params.userId },
        { balance: 1, tickets: 1, _id: 0 }
      );

      if (userInfo.balance < ticket.ticketPrice) {
        res.statusMessage = "Insufficient funds on balance!";
        return res.status(400).send();
      }

      await User.updateOne(
        { _id: req.params.userId },
        {
          tickets: [...userInfo.tickets, ticket],
          balance: userInfo.balance - ticket.ticketPrice
        }
      );
      return res.status(200).send(req.body);
    }

    if (req.body.oldPassword || req.body.oldPassword === "") {
      const oldPassword = req.body.oldPassword;
      const myPassword = await User.findById(req.params.userId, {
        _id: 0,
        password: 1
      });

      if (!bcrypt.compareSync(oldPassword, myPassword.password)) {
        res.statusMessage = "Invalid current password!";
        return res.status(400).send();
      }

      if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
      }

      await User.updateOne({ _id: req.params.userId }, req.body);

      const user = await User.findById(req.params.userId, {
        fullName: 1,
        password: 1,
        removeRequest: 1
      });

      return res.status(200).send(user);
    }
  } catch (error) {
    console.log("Error: " + error);
    res.statusMessage = "Internal server error!";
    return res.status(500).end();
  }
});

module.exports = router;
