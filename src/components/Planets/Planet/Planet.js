import React from "react";
import DescriptionWithLink from "../../shared/DescriptionWithLink/DescriptionWithLink";
import GrayImg from "../../shared/GrayImg/GrayImg";

const Planet = (props) => {
  return (
    <div onClick={() => props.clickOnPlanet(props.name)}>
      <h4>{props.name}</h4>
      <DescriptionWithLink description={props.description} linkURL={props.linkURL} />
      <br />
      <GrayImg imgUrl={props.imgUrl} />
    </div>
  );
};

export default Planet;
