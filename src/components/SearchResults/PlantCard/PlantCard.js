import React from "react";
import PlantButton from "../../../styles/buttons/getPlantButton";

function PlantCard(props) {
  console.log(props);
  const plant = props.plant;
  const getPlantDetails = props.getPlantDetails;
  return (
    <div className="plantDataDiv">
      <img className="plantImage" src={plant.image_url} alt="" />
      t.Kollitz13!
      {plant.common_name && <h4>{plant.common_name}</h4>}
      {plant.common_name && <p>Scientific Name: {plant.scientific_name}</p>}
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
}

export default PlantCard;
