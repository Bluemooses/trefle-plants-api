import React, { useState } from "react";
import PlantButton from "../../../styles/buttons/getPlantButton";
import { useSpring, animated } from "react-spring";
import { useSelector } from "react-redux";

function PlantCard(props) {
  const plant = props.plant;
  const plant_details = useSelector(state => state.plantDetails.data);
  const getPlantDetails = props.getPlantDetails;
  const springProps = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <animated.div style={springProps} className="plantDataDiv">
      <div>
        <animated.div
          class="c front"
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
        >
          <div className="center" onClick={() => set((state) => !state)}>
            {plant_details && <p>{plant_details.common_name}</p>}
            <PlantButton
              className="getPlantDetails"
              // function={() => getPlantDetails(plant)}
              // onClick={() => getPlantDetails(plant)}
              text="Back"
            ></PlantButton>
          </div>
        </animated.div>

        {/* Gets displayed on the front side of card first */}
        <animated.div
          class="c back"
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
        >
          <img className="plantImage" src={plant.image_url} alt="" />
          {plant.common_name && <h4>{plant.common_name}</h4>}
          {!plant.common_name && <h4>{plant.scientific_name}</h4>}
          <div className="center" onClick={() => set((state) => !state)}>
            <PlantButton
              className="getPlantDetails"
              function={() => getPlantDetails(plant)}
              onClick={() => getPlantDetails(plant)}
              text="Plant Details"
            ></PlantButton>
          </div>
        </animated.div>
      </div>
    </animated.div>
  );
}

export default PlantCard;
