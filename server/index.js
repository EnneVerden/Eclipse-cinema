const app = require("express")();
const bodyParser = require("body-parser");

require("./connection");

app.use(bodyParser.json());

app.use("/api", require("./api/films"));

app.use("/api", require("./api/users"));

app.use("/api", require("./api/user"));

app.listen(4000, () => {
  console.log("Server started on port 4000...");
});
