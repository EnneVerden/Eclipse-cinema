const express = require("express");
const router = express.Router();

const { User } = require("../models/userModel");

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

router.delete("/users", async (req, res) => {
  try {
    await User.deleteMany({ _id: req.body._id }, req.body);
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

module.exports = router;
