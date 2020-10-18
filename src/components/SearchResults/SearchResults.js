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
    <div>
      {plantData && (
        <div className="container">
          {plantData
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
          <div>
            <Pagination />
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
