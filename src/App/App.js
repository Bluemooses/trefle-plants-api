import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";
import md5 from "md5";


//requirements for MARVEL API calls
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);


const opts = `characters`; // whatever parameters you want, e.g., `characters/1009215`.

function App() {
  const [superHero, setSuperHero] = useState("");
  const url = `https://gateway.marvel.com/v1/public/${opts}?name=${superHero}&apikey=${publicKey}&hash=${hash}&ts=${ts}`; // putting it all together

  const getSupers = () => {
    axios
      .get(url) // library of your choice
      .then((res) =>
        console.log(res.data.data.results, res.data, res.data.data)
      ) // process data
      .catch((err) => console.warn(err)); // handle errors
  };

  const getSuperHero = () => {
    console.log(superHero);
    axios
      .get(url) // library of your choice
      .then((res) =>
        console.log(res.data.data.results, res.data, res.data.data)
      ) // process data
      .catch((err) => console.warn(err)); // handle errors
  };

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Input a hero"
          onChange={(e) => setSuperHero(e.target.value)}
        />
        <Button onClick={getSuperHero}>Get Marvel Hero</Button>
      </header>
    </div>
  );
}

export default App;
