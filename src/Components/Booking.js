import React, { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { DetailsContext } from "../App";
import travelfakeData from "../TravelfakeData";
import "./Booking.css";

const Booking = () => {
  const { bookingkey } = useParams();
  const findData = travelfakeData.find((item) => item.key === bookingkey);
  const [details, setDetails] = useContext(DetailsContext);

  return (
    <div className="booking">
      <div className="booking__left-section">
        <div>
          <h1>{findData.name}</h1>
          <h5>{findData.description}</h5>
        </div>
      </div>
      <div className="booking__right-section">
        <Form
          style={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            padding: "26px",
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Origin</Form.Label>
            <Form.Control type="email" placeholder="Dhaka" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Destination</Form.Label>
            <Form.Control type="text" placeholder="" value={details.name} />
          </Form.Group>
          <Row>
            <Col sm={12} md={6}>
              <Form.Label>From</Form.Label>
              <Form.Control type="date" name="fromDate" />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>To</Form.Label>
              <Form.Control type="date" name="toDate" />
            </Col>
          </Row>{" "}
          <br />
          <Link to="/PlaceDetails">
            <Button
              style={{ width: "100%", fontWeight: "700", fontSize: "large" }}
              variant="warning"
              type="submit"
            >
              Start Booking
            </Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default Booking;
