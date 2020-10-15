import React from "react";
import { useSelector } from "react-redux";
import GetPlantButton from "../../styles/buttons/getPlantButton";
import "../CurrentPlantPage/CurrentPlantPage.css";

function SearchResults(props) {
  const plants = useSelector((state) => state.searchResults);
  const plantData = plants.data;

  const getPlantDetails = (plant) => {
    console.log(plant);
  };
  return (
    <div className="">
      {plantData ? (
        <div className="plantCard">
          {plantData.map((plant) => {
            return (
              <div>
                <img className="plantImage" src={plant.image_url} alt="" />

                <div className="plantContainer">
                  {plant.common_name && <h4>{plant.common_name}</h4>}
                  {plant.common_name && (
                    <p>Scientific Name: {plant.scientific_name}</p>
                  )}
                  {!plant.common_name && <h4>{plant.scientific_name}</h4>}
                  <GetPlantButton
                    text={"Plant Details"}
                    function={getPlantDetails}
                    className="getPlants"
                  ></GetPlantButton>
                </div>
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
