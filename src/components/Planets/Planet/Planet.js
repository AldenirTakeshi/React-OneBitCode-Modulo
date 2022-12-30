import React from "react";
import GrayImg from "../../shared/GrayImg/GrayImg";

const Planet = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <GrayImg imgUrl={props.imgUrl} />
    </div>
  );
};

export default Planet;
