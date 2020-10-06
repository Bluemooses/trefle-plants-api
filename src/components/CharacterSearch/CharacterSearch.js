import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";
import CharacterCard from "../CharacterCard/CharacterCard";

function CharacterSearch(props) {
  //declaring variables for Marvel API
  const publicKey = props.publicKey;
  const hash = props.hash;
  const ts = props.ts;
  const opts = `characters`; // whatever parameters you want, e.g., `characters/1009215`.

  const [superHero, setSuperHero] = useState("");
  const [heroDetails, setHeroDetails] = useState({});
  const url = `https://gateway.marvel.com/v1/public/${opts}?name=${superHero}&apikey=${publicKey}&hash=${hash}&ts=${ts}`; // putting it all together

  useEffect(() => {
    console.log("UseEffect", heroDetails);
  }, [heroDetails]);

  const getSuperHero = () => {
    console.log(superHero);
    axios
      .get(url) // library of your choice
      .then((res) => {
        setHeroDetails(res.data.data.results);
        console.log(heroDetails);
      }) // process data
      .catch((err) => console.warn(err)); // handle errors
  };

  return (
    <div>
      <Input
        placeholder="Input a hero"
        onChange={(e) => setSuperHero(e.target.value)}
      />
      <Button onClick={getSuperHero}>Get Marvel Hero</Button>

      {Object.keys(heroDetails).length === 0 ? null : (
        <CharacterCard heroDetails={heroDetails} />
      )}
    </div>
  );
}

export default CharacterSearch;
