import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PlantButton from "../../styles/buttons/getPlantButton";
import SearchResults from "../SearchResults/SearchResults";
import SearchInput from "../../styles/input/SearchInput/SearchInput";

function PlantSearch(props) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(" ");
  const [searchActive, setSearchActive] = useState(false);
  const searchPlant = () => {
    console.log("click");
    dispatch({ type: "SEARCH_PLANT_BY_COMMON_NAME", payload: searchQuery });
    setSearchActive(true);
  };
  return (
    <div>
      <div>
        <SearchInput
          className="searchInput"
          placeholder="Search for plants"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        ></SearchInput>
        <PlantButton
          className={"getPlants"}
          text={"Search"}
          function={searchPlant}
        ></PlantButton>
      </div>
      <div>{searchActive ? <SearchResults /> : null}</div>
    </div>
  );
}

export default PlantSearch;
