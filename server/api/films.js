const express = require("express");
const router = express.Router();
const Film = require("../models/filmModel");

router.get("/films/get", async (req, res) => {
  try {
    const films = await Film.find({});
    res.send(films);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

router.post("/films/add", async (req, res) => {
  try {
    const film = await Film.create(req.body);
    console.log("New film: " + film);
    res.send(film);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

router.put("/films/:filmId/change", async (req, res) => {
  try {
    await Film.findByIdAndUpdate({ _id: req.params.filmId }, req.body);
    res.send(req.body);
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

router.delete("/films/:filmId/delete", async (req, res) => {
  try {
    await Film.deleteOne({ _id: req.params.filmId });
    res.send({ _id: req.params.filmId });
  } catch (error) {
    console.log("Error: " + error);
    res.send(false);
  }
});

module.exports = router;
