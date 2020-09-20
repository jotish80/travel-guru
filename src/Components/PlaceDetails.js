import React from 'react';
import Image5 from '../Image/Rectangle 26.png';
import Image6 from '../Image/Rectangle 27.png';
import Image7 from '../Image/Rectangle 28.png';

const hotelStyle = {
    display: 'grid'

}
const PlaceDetails = () => {
    return (
        <div style={hotelStyle}>
            <h1>This is place details</h1>
            <img src={Image5} alt="" />
            <img src={Image6} alt="" />
            <img src={Image7} alt="" />
        </div>
    );
};

export default PlaceDetails;