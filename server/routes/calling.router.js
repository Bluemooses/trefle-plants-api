const express = require("express");
const pool = require("../modules/pool");
const axios = require("axios");
const md5 = require("md5");
const router = express.Router();
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const ts = Date.now();
const opts = `characters`; // whatever parameters you want, e.g., `characters/1009215`.

const hash = md5(ts + privateKey + publicKey);
// const url = `https://gateway.marvel.com/v1/public/${opts}?name=${superHero}&apikey=${publicKey}&hash=${hash}&ts=${ts}`; // putting it all together

/**
 * GET route template
 */
router.get("/hero-search", async (req, res, next) => {
  try {
    axios.get();
  } catch (error) {
    next(error);
  }
});

/**
 * POST route template
 */
router.post("/", (req, res) => {});

module.exports = router;
