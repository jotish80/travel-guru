import React, { useState } from 'react';
import "firebase/auth";
import '../Screenshot/Home.png';
import './Home.css';
import './FakeDataDetail.css'


const FakeDataDetails = (props) => {

    const place = props.places;
    console.log(place);
    const { name, image, key, description } = place;
    const [details, setDetails] = useState({});


    return (
        <div className="image-section col-md-4">

            <div>
                <img src={image} alt="" />
                <h3>{name}</h3>
            </div>

        </div>


    );
};

export default FakeDataDetails;