import React, { useState } from "react";
import { useDispatch } from "react-redux";

function PlantSearch(props) {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(" ");
  const searchPlant = () => {
    dispatch({ type: "SEARCH_PLANT_BY_COMMON_NAME", payload: searchQuery });
  };
  return (
    <div>
      <input
        placeholder="Search for plants using common name"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
      ></input>
      <button onClick={searchPlant}>Search</button>
    </div>
  );
}

export default PlantSearch;
