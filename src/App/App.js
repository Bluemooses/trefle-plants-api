import React from "react";
import "./App.css";
import md5 from "md5";
import CharacterSearch from "../components/CharacterSearch/CharacterSearch";
import CharacterComics from "../components/CharacterComics/CharacterComics";

//requirements for MARVEL API calls
const publicKey = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY;
const ts = Date.now();
const hash = md5(ts + privateKey + publicKey);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CharacterSearch
          publicKey={publicKey}
          privateKey={privateKey}
          hash={hash}
          ts={ts}
        />
        <CharacterComics />
      </header>
    </div>
  );
}

export default App;
