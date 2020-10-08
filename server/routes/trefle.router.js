const axios = require("axios");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const md5 = require("md5");

const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);

/**
 * GET route template
 */
router.get(`/:hero`, (req, res) => {
  console.log("hit");
  console.log(req.params.hero);
  const hero = req.params.hero;
  axios
    .get(
      `https://gateway.marvel.com:443/v1/public/characters?name=${hero}&apikey=${publicKey}&hash=${hash}&ts=${ts}`
    )
    .then((response) => {
      console.log(response.data.data.results);

      res.send(response.data);
    })
    .catch((error) => console.log(error));
});

/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;
