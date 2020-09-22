import React, { useState } from 'react';
import travelfakeData from '../TravelfakeData';
import Content from './Content';
import FakeDataDetails from './FakeDataDetails';
import './FakeDataload.css';

const FakeDataLoad = () => {
    const [place, setPlace] = useState(travelfakeData);

    console.log(travelfakeData);
    return (
        <div className="background">
               <div className="contain">
              {
                  place.map(places => <Content places={places}></Content>)
              }
            </div>
            <div className="contain-image row" >
                {
                    place.map(places => <FakeDataDetails places={places}></FakeDataDetails>)
                }
            </div>
         
        </div>
    );
};

export default FakeDataLoad;