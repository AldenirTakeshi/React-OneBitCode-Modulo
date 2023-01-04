import React from "react";
import "./GrayImg.css";

const GrayImg = (props) => {
  return (
    <img
      className={props.gray ? "gray-img" : "color-img"}
      src={props.imgUrl}
      alt="Mercúrio IMG"
    />
  );
};

export default GrayImg;
