import React from "react";
import { useSelector } from "react-redux";
import "../CurrentPlantPage/CurrentPlantPage.css";

function SearchResults(props) {
  const plants = useSelector((state) => state.searchResults);
  const plantData = plants.data;
  return (
    <div>
      {plantData ? (
        <div className="container">
          {plantData.map((plant) => {
            return (
              <div className="plantDataDiv">
                <img className="plantImage" src={plant.image_url} alt="" />

                {plant.common_name && <h4>{plant.common_name}</h4>}
                {plant.common_name && (
                  <p>Scientific Name: {plant.scientific_name}</p>
                )}
                {!plant.common_name && <h4>{plant.scientific_name}</h4>}
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
