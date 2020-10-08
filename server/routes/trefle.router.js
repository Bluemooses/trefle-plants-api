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
 * This handles searching the initial hero
 */
router.get(`/:hero`, (req, res) => {
  const hero = req.params.hero;
  axios
    .get(
      `https://gateway.marvel.com:443/v1/public/characters?name=${hero}&apikey=${publicKey}&hash=${hash}&ts=${ts}`
    )
    .then((response) => {
      res.send(response.data.data.results);
    })
    .catch((error) => console.log(error));
});

/**
 * This handles comics by a marvel hero
 */
router.get("/comics/:hero", (req, res) => {
  console.log(req.params, req.params.hero);
  const heroId = req.params.hero;
  const url = `https://gateway.marvel.com:443/v1/public/characters/${heroId}/comics?apikey=${publicKey}&hash=${hash}&ts=${ts}`;

  axios
    .get(url)
    .then((response) => {
      res.send(response.data.data);
    })
    .catch((err) => console.warn(err));
});
/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;
