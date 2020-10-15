const axios = require("axios");
const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
// const md5 = require("md5");

// const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
// const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

// const ts = Date.now();
// const hash = md5(ts + privateKey + publicKey);

/**
 * This handles searching the initial hero
 */
// router.get(`/:hero`, (req, res) => {
//   console.log("hello");
//   const hero = req.params.hero;
//   axios
//     .get(
//       `https://gateway.marvel.com:443/v1/public/characters?name=${hero}&apikey=${publicKey}&hash=${hash}&ts=${ts}`
//     )
//     .then((response) => {
//       res.send(response.data.data.results);
//     })
//     .catch((error) => console.log(error));
// });

// /**
//  * This handles comics by a marvel hero
//  */
// router.get("/comics/:hero", (req, res) => {
//   console.log(req.params, req.params.hero);
//   const heroId = req.params.hero;
//   const url = `https://gateway.marvel.com:443/v1/public/characters/${heroId}/comics?apikey=${publicKey}&hash=${hash}&ts=${ts}`;

//   axios
//     .get(url)
//     .then((response) => {
//       res.send(response.data.data);
//     })
//     .catch((err) => console.warn(err));
// });

// /**
//  * GET MARVEL LIST
//  */
// router.get(`/heroes/comics`, (req, res) => {
//   console.log("not hit why");
//   const url = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&apikey=${publicKey}&hash=${hash}&ts=${ts}`;
//   const newUrl = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${ts}`;
//   const TestUrl = `https://gateway.marvel.com:443/v1/public/characters?apikey=2a716a4ff9744ce4574105f6d99a04c4
// `;
//   axios
//     .get(url)
//     .then((response) => {
//       console.log(response.data.data.results);
//       const resultsToSend = response.data.data.results;
//       res.send(resultsToSend);
//     })
//     .catch((err) => console.log(err));
// });

router.get(`/plants/search/:search`, (req, res) => {
  console.log(req.params.search);
  const searchQuery = req.params.search;
  console.log("this is a search");
  const url = `https://trefle.io/api/v1/plants/search?token=${process.env.REACT_APP_TREFLE_API_KEY}&q=${searchQuery}`;
  //axios is promise based

  //

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

router.get(`/plants`, (req, res) => {
  const url = `https://trefle.io/api/v1/plants?token=${process.env.REACT_APP_TREFLE_API_KEY}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      res.send(response.data);
    })
    .catch((err) => console.log(err));
});

router.get(`/plants/page/:url`, (req, res) => {
  const link = req.params.url;
  const link2 = req.params.url.url;
  console.log("this is page 1 using link", link, link2);

  console.log(req.body);
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
