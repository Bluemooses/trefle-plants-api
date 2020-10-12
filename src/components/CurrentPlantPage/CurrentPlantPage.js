import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CurrentPlantPage.css";
function CurrentPlantPage(props) {
  //hooks to connect with reducers
  const dispatch = useDispatch();
  const plantReducer = useSelector((state) => state.currentPlantPage);
  const plantData = plantReducer.data;
  const [windowWid, setWindowWid] = useState(0);
  const [windowLe, setWindowLe] = useState(0);
  useEffect(() => {
    const updateDimensions = () => {
      let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
      let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
      setWindowLe(windowHeight);
      setWindowWid(windowWidth);

      console.log(windowWid, windowLe);
    };
    window.addEventListener("resize", updateDimensions);
  }, [windowWid, windowLe]);

  return (
    <>
      {plantData ? (
        <div className="container">
          {plantData.map((plant) => {
            return (
              <div key={plant.id} class="plantDataDiv">
                <img className="plantImage" src={plant.image_url} alt=""></img>
                <header>{plant.common_name}</header>
                <ul>
                  <li>Scientific Name: {plant.scientific_name}</li>
                  <li>Year Attributed: {plant.year}</li>
                  <li>
                    <button>Plant Details</button>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
}

export default CurrentPlantPage;
