import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlantButton from "../../styles/buttons/getPlantButton";
import SearchResults from "../SearchResults/SearchResults";
import SearchInput from "../../styles/input/SearchInput/SearchInput";

function PlantSearch(props) {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.searchResults);
  const [searchQuery, setSearchQuery] = useState(" ");

  const searchPlant = () => {
    console.log("click");
    dispatch({ type: "NEW_SEARCH_PARAMS" });
    dispatch({ type: "SEARCH_PLANT_BY_COMMON_NAME", payload: searchQuery });
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
        />
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

export default PlantSearch;
