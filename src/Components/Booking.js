import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import travelfakeData from "../TravelfakeData";
import "./Booking.css";
const Booking = () => {
  const { bookingkey } = useParams();
  console.log(travelfakeData);
  const findData = travelfakeData.find((item) => item.key == bookingkey);
  console.log(findData);
  return (
    <div className="booking">
      <div className="booking__left-section">
        <div>
          <h1>{findData.name}</h1>
          <p>{findData.description}</p>
        </div>
      </div>
      <div className="booking__right-section">
        <form>
          <span>origin</span> <br />
          <input type="text" placeholder="DHAKA" /> <br />
          <span>Destination</span> <br />
          <input type="text" placeholder="SHUNDORBON" /> <br />
          <span>From</span> <br />
          <input type="date" /> <br />
          <span>To</span> <br />
          <input type="date" /> <br />
          <Link to="/PlaceDetails">
            <Button variant="primary">Start Booking</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Booking;
