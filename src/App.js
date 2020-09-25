import React, { createContext, useState } from "react";
import "../src/Logo.png";
import "./App.css";
import "./Components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import LogIn from "./Components/LogIn";
import PlaceDetails from "./Components/PlaceDetails";
import NotFound from "./NotFound";
import PrivateRoute from "./Components/PrivateRoute";
import Header from "./Components/Header";
import Booking from "./Components/Booking";

export const UserContext = createContext();
export const DetailsContext = createContext();

function App() {
  const [loggedUser, setLoggedUser] = useState({});
  const [details, setDetails] = useState({});

  return (
    <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <DetailsContext.Provider value={[details, setDetails]}>
        <Router>
          <Header />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/booking/:bookingkey">
              <Booking />
            </Route>
            <Route path="/LogIn">
              <LogIn />
            </Route>
            <PrivateRoute path="/PlaceDetails">
              <PlaceDetails />
            </PrivateRoute>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </DetailsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
