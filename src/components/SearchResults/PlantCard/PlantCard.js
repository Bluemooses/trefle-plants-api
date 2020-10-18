import React from "react";
import PlantButton from "../../../styles/buttons/getPlantButton";
import { useSpring, animated } from "react-spring";

function PlantCard(props) {
  const plant = props.plant;
  const getPlantDetails = props.getPlantDetails;
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={springProps} className="plantDataDiv">
      <img className="plantImage" src={plant.image_url} alt="" />
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
    </animated.div>
  );
}

export default PlantCard;
