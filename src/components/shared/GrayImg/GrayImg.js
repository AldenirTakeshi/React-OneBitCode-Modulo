import React from "react";
import "./GrayImg.css";

const GrayImg = (props) => {
  return <img className="gray-img" src={props.imgUrl} alt="Mercúrio IMG" />;
};

export default GrayImg;
