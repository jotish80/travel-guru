import React from 'react';
import '../src/Logo.png';
import './App.css';
import './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/header">
             <Header />
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
          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
