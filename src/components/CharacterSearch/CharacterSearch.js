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
  const [heroText, setHeroText] = useState("Marvel Heroes");
  useEffect(() => {
    console.log("UseEffect", heroDetails);
  }, [heroDetails]);
  useEffect(() => {
    console.log("dumb");
  }, [heroes]);

  const getSuperHero = () => {
    dispatch({ type: "GET_MARVEL_HERO", payload: superHero });
    dispatch({ type: "NEW_HERO_SEARCHED" });
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
      <Dropdown selection text={heroText}>
        {Object.keys(heroes).length === 0 ? null : (
          <Dropdown.Menu>
            {heroes.map((hero) => {
              return (
                <Dropdown.Item
                  onClick={() => {
                    setHeroText(hero.name);
                  }}
                  id={hero.id}
                  value={hero.name}
                >
                  {hero.name}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        )}
      </Dropdown>
    </div>
  );
}

export default CharacterSearch;
