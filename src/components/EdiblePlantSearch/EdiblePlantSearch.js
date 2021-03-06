import React, { useState } from "react";
import "./EdiblePlantSearch.scss";

import PlantButton from "../../styles/buttons/getPlantButton";
import SearchResults from "../SearchResults/SearchResults";
import SearchInput from "../../styles/input/SearchInput/SearchInput";

import { useDispatch, useSelector } from "react-redux";

function EdiblePlantSearch(props) {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  const [searchQuery, setSearchQuery] = useState(" ");

  const searchPlant = () => {
    dispatch({ type: "NEW_SEARCH_PARAMS" });
    dispatch({ type: "SEARCH_EDIBLE_PLANTS", payload: searchQuery });
  };
  return (
    <div className="pageContainer">
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
      {searchResults && <SearchResults />}
    </div>
  );
}

export default EdiblePlantSearch;
