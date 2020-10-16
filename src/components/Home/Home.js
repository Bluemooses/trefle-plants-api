import React from "react";
import PlantSearch from "../PlantSearch/PlantSearch";
import EdiblePlantSearch from "../EdiblePlantSearch/EdiblePlantSearch";

const Home = (props) => {
  console.log(props);

  return (
    <div>
      <PlantSearch />
      <EdiblePlantSearch />
    </div>
  );
};

export default Home;
