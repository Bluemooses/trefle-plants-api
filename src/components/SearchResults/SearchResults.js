import React from "react";
import { useSelector } from "react-redux";

function SearchResults(props) {
  const plants = useSelector((state) => state.searchResults);
  const plantData = plants.data;
  return (
    <div>
      {plantData ? (
        <div>
          {plantData.map((plant) => {
            return (
              <div>
                {plant.common_name && <p>{plant.common_name}</p>}
                {!plant.common_name && <p>{plant.scientific_name}</p>}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
