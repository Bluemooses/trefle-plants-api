import React from "react";
import { useSelector } from "react-redux";
import "../CurrentPlantPage/CurrentPlantPage.css";
import "../SearchResults/SearchResults.scss";
import PlantButton from "../../styles/buttons/getPlantButton";
import Pagination from "../Pagination/Pagination";
function SearchResults(props) {
  const plants = useSelector((state) => state.searchResults);
  const plantData = plants.data;
  const styles = {
    getPlantButton: {
      "background-color": "red",
    },
  };
  const getPlantDetails = (plant) => {
    console.log(plant);
  };
  return (
    <div>
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
                  <div className="center">
                    <PlantButton
                      className="getPlants"
                      function={() => getPlantDetails(plant)}
                      style={styles.getPlantButton}
                      onClick={() => getPlantDetails(plant)}
                      text="Plant Details"
                    ></PlantButton>
                  </div>
                </div>
              );
            })}
            <Pagination />
          </div>
        ) : (
          <div>
            <p>Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
