import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from '../Image/BgImage.png';



const Sreemongol = () => {
  return (
    <div style={{ backgroundImage: `url(${Image})` }} className='home'>
      <div className='child'>
        <h1>Sreemongol</h1>
        <p>Sreemongol is the most rainy place in Bangladesh! If you want to get take shower, nice and clean environment visit Sreemongol</p>
      </div>
      <div className='child'>
        <form>
          <span>origin</span>  <br />
          <input type="text" placeholder="DHAKA" /> <br />
          <span>Destination</span> <br />
          <input type="text" placeholder="SREEMONGOL" /> <br />
          <span>From</span><span>To</span> <br />
          <input type="date" /><input type="date" /> <br />
          <Link to="/PlaceDetails"> <Button variant="primary">Start Booking</Button> </Link>
        </form>
      </div>
    </div>
  );
};

export default Sreemongol;