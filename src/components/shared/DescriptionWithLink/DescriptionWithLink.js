import React from "react";

const DescriptionWithLink = (props) => {
  if (props.linkURL) {
    return (
      <>
        <p>{props.description}</p>
        <a href={props.linkURL}>{props.linkURL}</a>
      </>
    );
  } else {
    return (
      <>
        <p>
          <u>{props.description}</u>
        </p>
      </>
    );
  }
};

export default DescriptionWithLink;
