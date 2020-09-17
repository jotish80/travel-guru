import React from 'react';
import { Button } from 'react-bootstrap';

const SajekStyle = {
    display: 'flex',
    width: '1000px' ,
    margin: 'auto',
    backgroundColor: 'cyan' 
}

const Sajek = () => {
    return (
        <div style={SajekStyle}>
             <div row-col-md-6>
                <h1>Sreemongol</h1>
                <p>Sreemongol is the most rainy place in Bangladesh! If you want to get take shower, nice and clean environment visit Sreemongol</p>
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