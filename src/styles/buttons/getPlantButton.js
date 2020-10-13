import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import "../buttons/getPlantButton.scss";
const PlantButton = (props) => {
  return (
    <button onClick={props.function} className={props.className}>
      {props.text}
    </button>
  );
};

export default PlantButton;
