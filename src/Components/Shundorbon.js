import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from '../Image/BgImage.png';

 

const Shundorbon = () => {
    return (
        <div style={{backgroundImage: `url(${Image})`}} className='home'>
             <div className='child'>
                <h1>Shundorbon</h1>
                <p>Shundorbon is the most beautiful mangrove forest in Bangladesh! All forest around. If you want to see Royal bengal tigers visit Shundorbon</p>
             </div>
             <div className='child'>
                <form>
                  <span>origin</span>  <br/>
                  <input type="text" placeholder="DHAKA"/> <br/>
                  <span>Destination</span> <br/>
                  <input type="text" placeholder="SHUNDORBON"/> <br/>
                  <span>From</span><span>To</span> <br/>
                  <input type="date"/><input type="date"/> <br/>
                  <Link to="/LogIn"> <Button variant="primary">Start Booking</Button> </Link>
                </form>
             </div>
        </div>
    );
};

export default Shundorbon;