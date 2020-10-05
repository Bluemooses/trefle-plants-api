const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

//Routes included
const callingRouter = require("./routes/calling.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//cors for connecting to APIs
app.use(cors());

//Routes
app.use("/api/calling", callingRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

module.exports = app;
