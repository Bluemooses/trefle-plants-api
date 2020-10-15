import React from "react";

const Card = (props) => {
  return (
    <div class="card">
      <img src={props.image} alt="N/A" style={"width:100%"} />
      <div class="container">
        <h4>{props.header}</h4>
      </div>
    </div>
  );
};

export default Card;
