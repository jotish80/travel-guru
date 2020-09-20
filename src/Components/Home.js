import React, { useState } from 'react';
import "firebase/auth";
import '../Screenshot/Home.png';
import './Home.css';
import Image from '../Image/BgImage.png';
import Image1 from '../Image/Sajek.png';
import Image2 from '../Image/Sreemongol.png';
import Image3 from '../Image/sundorbon.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const cardStyle = {
  height: '300px',
  width: '200px',
  // overflow: 'hidden',
  margin: '10px'
}

const name1 = 'Sajek'
const description1 = 'Sajek is the beautiful place in the world'
const name2 = 'Sreemongol'
const description2 = 'Sreemongol is the most rainy  place in the world'
const name3 = 'Sundorbon'
const description3 = 'Sundorbon is the most beautiful Mangrove forest  in the world. Tigers are all around.'


const Home = () => {
  const [details, setDetails] = useState({});


  return (

    <div style={{ backgroundImage: `url(${Image})` }} className='home'>
      <div className='child'>
        <div style={{ color: 'white' }}>
          <h1>{details.name}</h1>
          <p>{details.description}</p>
          <Button variant="primary">  Booking</Button>
        </div>
      </div>
      <div className='child'>
        <div className="card-container">
          <Link to="/Sajek">
            <div style={cardStyle}>
              <img onClick={() => setDetails({ name: name1, description: description1 })} src={Image1} alt="" />
              <h3>Sajek</h3>
            </div>
          </Link>
          <Link to="/Sreemongol">
            <div style={cardStyle}>
              <img onClick={() => setDetails({ name: name2, description: description2 })} src={Image2} alt="" />
              <h3>Sreemongol</h3>
            </div>
          </Link>
          <Link to="/Shundorbon">
            <div style={cardStyle}>
              <img onClick={() => setDetails({ name: name3, description: description3 })} src={Image3} alt="" />
              <h3>Sundorbon</h3>
            </div>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;