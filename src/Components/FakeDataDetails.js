import React from "react";
import "firebase/auth";
import "../Screenshot/Home.png";
import "./Home.css";
import "./FakeDataDetail.css";

const FakeDataDetails = (props) => {
  const place = props.places;
  const { name, image, key, description } = place;
  return (
    <div
      onClick={() => props.handleClick(key)}
      className="image-section col-md-4"
    >
      <img src={image} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default FakeDataDetails;
