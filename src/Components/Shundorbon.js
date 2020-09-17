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
                <h1>Shundorbon</h1>
                <p>Shundorbon is the most beautiful mangrove forest in Bangladesh! All forest around. If you want to see Royal bengal tigers visit Shundorbon</p>
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