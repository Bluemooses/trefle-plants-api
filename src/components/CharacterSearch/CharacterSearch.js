import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input } from "semantic-ui-react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { useDispatch, useSelector } from "react-redux";

function CharacterSearch(props) {
  //declaring variables for Marvel API
  const dispatch = useDispatch();
  const heroDetails = useSelector((state) => state.currentHero);
  const heroes = useSelector((state) => state.allHeroes);
  const [superHero, setSuperHero] = useState("");

  useEffect(() => {
    console.log("UseEffect", heroDetails);
  }, [heroDetails]);
  useEffect(() => {
    console.log("dumb");
  }, [heroes]);

  const getSuperHero = () => {
    dispatch({ type: "GET_MARVEL_HERO", payload: superHero });
    dispatch({ type: "NEW_HERO_SEARCHED" });
    dispatch({ type: "GET_HEROES" });
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
      <Dropdown text="Marvel Heroes">
        {Object.keys(heroDetails).length === 0 ? null : (
          <Dropdown.Menu>
            <Dropdown.Item text={heroDetails[0].name} />
            <Dropdown.Item text="aloha" />
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
}

export default CharacterSearch;
