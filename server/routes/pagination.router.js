const axios = require("axios");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const trefleApiKey = process.env.REACT_APP_TREFLE_API_KEY;
/**
 * GET route template
 */
router.get(`/`, (req, res) => {
  const queryUrl = req.query.rawUrl;
  // url.searchParams.get()

  const url = `https://trefle.io${queryUrl}&token=${process.env.REACT_APP_TREFLE_API_KEY}`;

  axios
    .get(url)
    .then((response) => {
      // console.log(response.data);
      res.send(response.data);
    })
    .catch((error) => {
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;
