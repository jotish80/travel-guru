import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DetailsContext } from "../App";
import travelfakeData from "../TravelfakeData";
import FakeDataDetails from "./FakeDataDetails";
import "./FakeDataload.css";

const FakeDataLoad = () => {
  const [details, setDetails] = useContext(DetailsContext);
  const [place, setPlace] = useState(travelfakeData);
  const [data, setData] = useState({});
  const handleClick = (key) => {
    const findData = travelfakeData.find((item) => item.key === key);
    setDetails(findData);
    setData(findData);
  };

  return (
    <div className="background">
      <div className="contain">
        <h1>{data.name}</h1>
        <h6>{data.description}</h6>
        <Link to={"/booking/" + data.key}>
          {data.key && <Button variant="warning">Booking</Button>}
        </Link>
      </div>
      <div className="contain-image row">
        {place.map((places) => (
          <FakeDataDetails
            places={places}
            handleClick={handleClick}
            key={places.key}
          ></FakeDataDetails>
        ))}
      </div>
    </div>
  );
};

export default FakeDataLoad;
