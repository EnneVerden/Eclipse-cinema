const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { User } = require("../models/userModel");

router.get("/user", async (req, res) => {
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

router.post("/user", async (req, res) => {
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

router.put("/user/:id", async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }

    await User.updateOne({ _id: req.params.id }, req.body);
    const user = await User.findById({ _id: req.params.id });

    res.send({
      fullName: user.fullName,
      password: user.password,
      removeRequest: user.removeRequest
    });
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

module.exports = router;
