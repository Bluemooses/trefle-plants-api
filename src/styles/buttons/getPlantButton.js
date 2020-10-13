import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import "../buttons/getPlantButton.scss";
const PlantButton = (props) => {
  return <button className="getPlants">{props.text}</button>;
};

export default PlantButton;
