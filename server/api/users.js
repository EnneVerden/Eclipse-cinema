const express = require("express");
const router = express.Router();

const { User } = require("../models/userModel");

router.get("/users", async (req, res) => {
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

router.delete("/users", async (req, res) => {
  try {
    await User.deleteMany({ _id: req.body._id });
    res.send(req.body);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

module.exports = router;
