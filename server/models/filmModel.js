const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FilmSchema = new Schema({
  name: String,
  poster: String,
  description: String,
  tags: String,
  startDate: String,
  endDate: String,
  ticketPrice: Number
});

const Film = mongoose.model("film", FilmSchema);

module.exports = { Film };
