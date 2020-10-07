import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";
import CharacterCard from "../CharacterCard/CharacterCard";
import { useDispatch } from "react-redux";

function CharacterSearch(props) {
  //declaring variables for Marvel API
  const dispatch = useDispatch();
  const [superHero, setSuperHero] = useState("");
  const [heroDetails, setHeroDetails] = useState({});

  useEffect(() => {
    console.log("UseEffect", heroDetails);
  }, [heroDetails]);

  const getSuperHero = () => {
    console.log(superHero);
    //dispatch to saga here

    dispatch({ type: "GET_MARVEL_HERO", payload: superHero });
    // axios
    //   .get(url) // library of your choice
    //   .then((res) => {
    //     setHeroDetails(res.data.data.results);
    //     console.log(heroDetails);
    //   }) // process data
    //   .catch((err) => console.warn(err)); // handle errors
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
