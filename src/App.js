import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Destination from './Components/Destination/Destination';
import Home from './Components/Home/Home';
import HotelsRoom from './Components/Hotels/HotelsRoom';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookingFinalize from './Components/BookingFinalize/BookingFinalize';
function App() {
  return (
    <div> 
      
    <Router>
      <Switch>
      
        <Route path="/home">
          <Home/>
        </Route>

        <Route path="/bookingfinalize/:rootId">
          <BookingFinalize/>
        </Route>

        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/hotelsroom/:hotel">
          <HotelsRoom/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
      
      

    </div>
  );
}

export default App;
