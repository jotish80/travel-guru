import React, { useContext } from "react";
import { DetailsContext } from "../App";
import Image5 from "../Image/Rectangle 26.png";
import Image6 from "../Image/Rectangle 27.png";
import Image7 from "../Image/Rectangle 28.png";
import "./HotelDetails.css";
const HotelDetails = ({ img }) => {
  const [details, setDetails] = useContext(DetailsContext);
  return (
    <div className="hotel-details">
      <div className="images">
        <img src={img} alt="" />
      </div>
      <div className="hotel-details-right">
        <div>
          <h4>Light bright airy stylish apt & safe peaceful stay</h4>
          <p>
            4 guest &nbsp; 2 bedroom &nbsp;2 beds &nbsp; 2 baths wif Air
            condition kitchen cancellation flexibility available
          </p>
          <p>★★★ &nbsp; 4.09(20) &nbsp; $34/night</p>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
