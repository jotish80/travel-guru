import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import travelfakeData from '../TravelfakeData';
import Content from './Content';
import FakeDataDetails from './FakeDataDetails';
import './FakeDataload.css';

const FakeDataLoad = () => {
    const [place, setPlace] = useState(travelfakeData);
    const [data, setData] = useState({});
    const handleClick = (key)=>{
        const findData = travelfakeData.find(item => item.key === key);
       setData(findData);
    }
     
     
    return (
        <div className="background">
               <div className="contain">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <Link to={'/booking/'+ data.key} >{ data.key && <button>Booking</button> } </Link>
              {/* {
                  place.map(places => <Content places={places}></Content>)
              } */}
            </div>
            <div className="contain-image row" >
                {
                    place.map(places => <FakeDataDetails places={places} handleClick={handleClick} key={places.key}></FakeDataDetails>)
                }
            </div>
         
        </div>
    );
};

export default FakeDataLoad;