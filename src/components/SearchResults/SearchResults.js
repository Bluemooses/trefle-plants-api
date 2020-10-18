import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../CurrentPlantPage/CurrentPlantPage.css";
import "../SearchResults/SearchResults.scss";
import PlantCard from "./PlantCard/PlantCard";
import Pagination from "../Pagination/Pagination";
function SearchResults() {
  //
  const dispatch = useDispatch();
  const plants = useSelector((state) => state.searchResults);
  const plantData = plants.data;

  const getPlantDetails = (plant) => {
    console.log(plant);
    dispatch({ type: "GET_PLANT_DETAILS", payload: plant });
  };

  return (
    <>
      {/* If there's more than 5 plant results display pagination on Top and Bottom */}
      {plantData && plantData.length > 5 && <Pagination />}
      {plantData && (
        <div className="container">
          {plantData.filter((plantFilter) => plantFilter.image_url).length ===
            0 && (
            <div>
              <p>No data available..</p>
            </div>
          )}
          {plantData.length > 0 &&
            plantData
              //Only display received plant data with image urls
              .filter((plantFilter) => plantFilter.image_url)
              .map((plant) => {
                return (
                  <PlantCard
                    key={plant.id}
                    plant={plant}
                    getPlantDetails={getPlantDetails}
                  />
                );
              })}
        </div>
      )}

      {plantData && <Pagination />}
    </>
  );
}

export default SearchResults;
