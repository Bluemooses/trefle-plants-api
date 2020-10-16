import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlantButton from "../../styles/buttons/getPlantButton";
import SearchResults from "../SearchResults/SearchResults";
import SearchInput from "../../styles/input/SearchInput/SearchInput";

function EdiblePlantSearch(props) {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  const [searchQuery, setSearchQuery] = useState(" ");

  const searchPlant = () => {
    console.log("click");
    dispatch({ type: "NEW_SEARCH_PARAMS" });
    dispatch({ type: "SEARCH_EDIBLE_PLANTS", payload: searchQuery });
  };
  return (
    <div>
      <div>
        <SearchInput
          className="searchInput"
          placeholder="Search for edible plants"
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
      {Object.keys(searchResults).length === 0 ? null : <SearchResults />}
    </div>
  );
}

export default EdiblePlantSearch;
