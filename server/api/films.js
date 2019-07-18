const express = require("express");
const router = express.Router();
const { Film } = require("../models/filmModel");

router.get("/films", async (req, res) => {
  try {
    const films = await Film.find({});
    res.send(films);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

router.post("/film", async (req, res) => {
  try {
    const film = await Film.create(req.body);
    console.log("New film: " + film);
    res.send(film);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

router.put("/film/:id", async (req, res) => {
  try {
    await Film.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.send(req.body);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

router.delete("/film/:id", async (req, res) => {
  try {
    await Film.deleteOne({ _id: req.params.id });
    res.send({ _id: req.params.id });
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

module.exports = router;
