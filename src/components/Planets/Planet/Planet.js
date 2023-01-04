import React from "react";
import DescriptionWithLink from "../../shared/DescriptionWithLink/DescriptionWithLink";
import GrayImg from "../../shared/GrayImg/GrayImg";

const Planet = (props) => {
  let title;
  if (props.title_with_underline) {
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  } else {
    title = <h4>{props.name}</h4>;
  }
  return (
    <div>
      {title}
      <DescriptionWithLink description={props.description} linkURL={props.linkURL} />
      <br />
      <GrayImg imgUrl={props.imgUrl} gray={props.gray} />
    </div>
  );
};

export default Planet;
