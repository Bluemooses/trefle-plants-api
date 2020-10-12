import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchResults from "../SearchResults/SearchResults";

function PlantSearch(props) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(" ");
  const [searchActive, setSearchActive] = useState(false);
  const searchPlant = () => {
    dispatch({ type: "SEARCH_PLANT_BY_COMMON_NAME", payload: searchQuery });
    setSearchActive(true);
  };
  return (
    <div>
      <div>
        <input
          placeholder="Search for plants"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        ></input>
        <button onClick={searchPlant}>Search</button>
      </div>
      <div>{searchActive ? <SearchResults /> : null}</div>
    </div>
  );
}

export default PlantSearch;
