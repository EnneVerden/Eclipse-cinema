const express = require("express");
const router = express.Router();
const Film = require("../models/filmModel");

router.get("/films/get", async (req, res) => {
  try {
    const films = await Film.find({});

    return res.status(200).send(films);
  } catch (error) {
    console.log("Error: " + error);
    res.statusMessage = "Internal server error!";
    return res.status(500).end();
  }
});

router.post("/films/add", async (req, res) => {
  try {
    const film = await Film.create(req.body);

    console.log("New film: " + film);
    return res.status(200).send(film);
  } catch (error) {
    console.log("Error: " + error);
    res.statusMessage = "Internal server error!";
    return res.status(500).end();
  }
});

router.put("/films/:filmId/change", async (req, res) => {
  try {
    await Film.findByIdAndUpdate({ _id: req.params.filmId }, req.body);

    return res.status(200).send(req.body);
  } catch (error) {
    console.log("Error: " + error);
    res.statusMessage = "Internal server error!";
    return res.status(500).end();
  }
});

router.delete("/films/:filmId/delete", async (req, res) => {
  try {
    await Film.deleteOne({ _id: req.params.filmId });

    return res.status(200).send({ _id: req.params.filmId });
  } catch (error) {
    console.log("Error: " + error);
    res.statusMessage = "Internal server error!";
    return res.status(500).end();
  }
});

module.exports = router;
