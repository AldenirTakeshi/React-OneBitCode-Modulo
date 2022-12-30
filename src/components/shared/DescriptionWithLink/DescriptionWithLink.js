import React from "react";

const DescriptionWithLink = (props) => {
  return (
    <>
      <p>{props.description}</p>
      <a href={props.linkURL}>{props.linkURL}</a>
    </>
  );
};

export default DescriptionWithLink;
