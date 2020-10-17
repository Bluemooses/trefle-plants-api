const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

//Routes included
const callingRouter = require("./routes/calling.router");
const trefleRouter = require("./routes/trefle.router");
const paginationRouter = require("./routes/pagination.router");
const plantDetailsRouter = require("./routes/plantDetails.router");
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
}
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

//cors for connecting to APIs
app.use(cors());

//Routes
app.use("/api/calling", callingRouter);
app.use("/api/trefle", trefleRouter);
app.use("/api/pages", paginationRouter);
app.use("/api/plant-details", plantDetailsRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
