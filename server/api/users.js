const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/userModel");

router.get("/users/get", async (req, res) => {
  try {
    const users = await User.find(
      {},
      { avatar: 1, fullName: 1, email: 1, status: 1, removeRequest: 1 }
    );
    res.send(users);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

router.delete("/users/delete", async (req, res) => {
  try {
    await User.deleteMany({ _id: req.body._id });
    res.send(req.body);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

router.get("/users/getUser", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.query.email });

    if (!user) res.send(false);
    if (!bcrypt.compareSync(req.query.password, user.password)) {
      res.send(false);
    }

    res.send(user);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

router.post("/users/addUser", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      const hashPassword = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create({
        email: req.body.email,
        fullName: req.body.fullName,
        password: hashPassword
      });
      console.log("New user: " + user);
      res.send(user);
    } else {
      res.send(false);
    }
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
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
      res.send(req.body);
      return;
    }

    if (req.body.buyTicket) {
      const ticket = req.body.buyTicket;

      const userInfo = await User.findById(
        { _id: req.params.userId },
        { balance: 1, tickets: 1, _id: 0 }
      );

      if (userInfo.balance < ticket.ticketPrice) {
        res.send("BalanceError");
        return;
      }

      await User.updateOne(
        { _id: req.params.userId },
        {
          tickets: [...userInfo.tickets, ticket],
          balance: userInfo.balance - ticket.ticketPrice
        }
      );
      res.send(req.body);
      return;
    }

    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    await User.updateOne({ _id: req.params.userId }, req.body);

    const user = await User.findById(
      { _id: req.params.userId },
      { fullName: 1, password: 1, removeRequest: 1 }
    );

    res.send(user);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

module.exports = router;
