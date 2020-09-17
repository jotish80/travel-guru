import React from 'react';
import '../src/Logo.png';
import './App.css';
import './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Home from './Components/Home';
import LogIn from './Components/LogIn';
 
import PlaceDetails from './Components/PlaceDetails';
import Sajek from './Components/Sajek';
 import Sreemongol from './Components/Sreemongol';
 import Shundorbon from './Components/Shundorbon';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
         
          <Route path="/Sajek">
             <Sajek />
          </Route>
          <Route path="/Sreemongol">
             <Sreemongol />
          </Route>
          <Route path="/Shundorbon">
             <Shundorbon />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/PlaceDetails">
            <PlaceDetails />
          </Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
