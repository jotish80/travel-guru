import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from '../Image/BgImage.png';


const Sajek = () => {
    return (
        <div style={{ backgroundImage: `url(${Image})` }} className='home'>
            <div className='child'>
                <div className="left">
                    <h1>Sajek</h1>
                    <p>Sajek is the most beautiful place in Bangladesh! All mountains around. If you want to get fresh air, nice and clean environment visit Sajek</p>
                </div>
                <div className="child">
                    <form>
                        <span>origin</span>  <br />
                        <input type="text" placeholder="DHAKA" /> <br />
                        <span>Destination</span> <br />
                        <input type="text" placeholder="SAJEK" /> <br />
                        <span>From</span><span>To</span> <br />
                        <input type="date" /><input type="date" /> <br />
                        <Link to="/PlaceDetails"> <Button variant="primary">Start Booking</Button> </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sajek;