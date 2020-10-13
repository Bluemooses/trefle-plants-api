import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
const PlantButton = withStyles({
  root: {
    background: "green",
    borderRadius: 7,
    color: "white",
    height: "10%",
    width: "10%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    "&:hover": {
      backgroundColor: "red",
    },
  },
  hover: {},
})(Button);

export default PlantButton;
