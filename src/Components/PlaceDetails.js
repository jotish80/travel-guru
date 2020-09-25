import React, { useContext } from "react";
import Image5 from "../Image/Rectangle 26.png";
import Image6 from "../Image/Rectangle 27.png";
import Image7 from "../Image/Rectangle 28.png";
import Mymap from "./Mymap";
import "./PlaceDetails.css";
import { DetailsContext } from "../App";
import HotelDetails from "./HotelDetails";

const PlaceDetails = () => {
  const [details, setDetails] = useContext(DetailsContext);

  return (
    <div className="placeDetails">
      <div className="placeDetails__left">
        <h1>Stay in {details.name}</h1>
        <HotelDetails img={Image5} />
        <HotelDetails img={Image6} />
        <HotelDetails img={Image7} />
      </div>
      <div className="placeDetails__right">
        <Mymap />
      </div>
    </div>
  );
};

export default PlaceDetails;
