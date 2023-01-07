import React from "react";

const DescriptionWithLink = (props) => {
  if (!props.description) {
    return null;
  }
  if (props.link) {
    return (
      <>
        <p>{props.description}</p>
        <a href={props.link}>{props.link}</a>
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
