import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth"; 
import firebaseConfig from '../firebase.config';
import '../Screenshot/Home.png';
 import './Home.css';
import Image from '../Image/BgImage.png'; 
 
  firebase.initializeApp(firebaseConfig);
const Home = () => {
    return (
        
        <div style= {{backgroundImage: `url(${Image})`}} className ='home'>
          
             
        </div>
    );
};

export default Home;