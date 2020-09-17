import React from 'react';
import { Button } from 'react-bootstrap';
import Image from '../Image/BgImage.png';

const SajekStyle = {
    display: 'flex',
    width: '1000px' ,
    margin: 'auto',
    backgroundColor: 'cyan'
     
}

const Sajek = () => {
    return (
        <div style= {SajekStyle}>
             <div row-col-md-6>
                <h1>Sajek</h1>
                <p>Sajek is the most beautiful place in Bangladesh! All mountains around. If you want to get fresh air, nice and clean environment visit Sajek</p>
             </div>
             <div row-col-md-6>
                <form>
                  <small>origin</small>  <br/>
                  <input type="text" placeholder="city"/> <br/>
                  <small>Destination</small> <br/>
                  <input type="text" placeholder="city"/> <br/>
                  <small>From</small><small>To</small> <br/>
                  <input type="date"/><input type="date"/> <br/>
                  <Button variant="primary">Start Booking</Button>
                </form>
             </div>
        </div>
    );
};

export default Sajek;