import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "semantic-ui-react";
import axios from "axios";
import md5 from "md5";

const puke = (obj) => JSON.stringify(obj, null, 2); // this just prints pretty JSON.
const root = document.getElementById("root"); // empty <pre /> (for JSON formatting)
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);

const opts = `comics`; // whatever parameters you want, e.g., `characters/1009215`.

const url = `https://gateway.marvel.com/v1/public/${opts}?apikey=${publicKey}&hash=${hash}&ts=${ts}`; // putting it all together

function App() {
  const getSupers = () => {
    axios
      .get(url) // library of your choice
      .then((res) => (root.innerHTML = puke(res))) // process data
      .catch((err) => console.warn(err)); // handle errors
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button onClick={getSupers}>getSupers</Button>
      </header>
    </div>
  );
}

export default App;
