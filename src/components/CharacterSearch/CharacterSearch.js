import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";
import CharacterCard from "../CharacterCard/CharacterCard";
import { useDispatch, useSelector } from "react-redux";

function CharacterSearch(props) {
  //declaring variables for Marvel API
  const dispatch = useDispatch();
  const heroDetails = useSelector((state) => state.currentHero);

  const [superHero, setSuperHero] = useState("");

  useEffect(() => {
    console.log("UseEffect", heroDetails);
  }, [heroDetails]);

  const getSuperHero = () => {
    dispatch({ type: "GET_MARVEL_HERO", payload: superHero });
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
