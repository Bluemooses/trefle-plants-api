import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CurrentPlantPage/CurrentPlantPage.css";
import "../SearchResults/SearchResults.scss";
import PlantButton from "../../styles/buttons/getPlantButton";
import Pagination from "../Pagination/Pagination";
function SearchResults(props) {
  //
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.searchResults);

  const plantData = plants.data;

  const getPlantDetails = (plant) => {
    console.log(plant);
    dispatch({ type: "GET_PLANT_DETAILS", payload: plant });
  };
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
                <div className="center">
                  <PlantButton
                    className="getPlantDetails"
                    function={() => getPlantDetails(plant)}
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
  );
}

export default SearchResults;
