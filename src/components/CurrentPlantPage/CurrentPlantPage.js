import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function CurrentPlantPage(props) {
  //hooks to connect with reducers
  const dispatch = useDispatch();
  const plantReducer = useSelector((state) => state.currentPlantPage);
  const plantData = plantReducer.data;

  return (
    <>
      {plantData ? (
        <div>
          {plantData.map((plant) => {
            return <p>{plant.common_name}</p>;
          })}
        </div>
      ) : (
        <div>Loading..</div>
      )}
    </>
  );
}

export default CurrentPlantPage;
