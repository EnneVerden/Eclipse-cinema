const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://localhost/cinema-db", {
  useNewUrlParser: true
});

module.exports = connection;
