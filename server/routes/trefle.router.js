const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get(`/plants/search/:search`, (req, res) => {
  const { search } = req.params;
  console.log("this is a search");
  const url = `https://trefle.io/api/v1/plants/search?token=${process.env.REACT_APP_TREFLE_API_KEY}&q=${search}`;

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
  const { search } = req.params;
  const url = `https://trefle.io/api/v1/plants/search?token=${process.env.REACT_APP_TREFLE_API_KEY}&filter[edible]=true&q=${search}`;
  axios
    .get(url)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get(`/plants/page/:url`, (req, res) => {
  const { url } = req.params;
  axios
    .get(url)
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
