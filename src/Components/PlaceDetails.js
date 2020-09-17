import React, { useState } from 'react';
 
import Icon from '../Icon/calender_icon.png'
import image from '../FakeData';

const PlaceDetails = () => {
   const [image, setImage] = useState({});
   console.log(image);
    return (
        <div>
            <div>
                  <img src={image} alt=""/>
            </div>
            <div>
                <form action="">
                <input type="text" placeholder="City Name"/> <br/> 
                <input type="password" placeholder="City Name"/> <br/>
                 <input type="text" placeholder="date" img={Icon} /> 
                </form>
            </div>
        </div>
    );
};

export default PlaceDetails;