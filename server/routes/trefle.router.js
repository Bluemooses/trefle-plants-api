const axios = require("axios");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get(`/plants/search/:search`, (req, res) => {
  console.log(req.params.search);
  const searchQuery = req.params.search;
  console.log("this is a search");
  const url = `https://trefle.io/api/v1/plants/search?token=${process.env.REACT_APP_TREFLE_API_KEY}&q=${searchQuery}`;
  //axios is promise based

  axios
    .get(url)
    .then((response) => {
      // console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get(`/edible-plants/:search`, (req, res) => {
  const searchQuery = req.params.search;
  const url = `https://trefle.io/api/v1/plants/search?token=${process.env.REACT_APP_TREFLE_API_KEY}&filter[edible]=true&q=${searchQuery}`;

  axios
    .get(url)
    .then((response) => {
      // console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get(`/plants/page/:url`, (req, res) => {
  const link = req.params.url;
  axios
    .get(link)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.log(err));
});
/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;
