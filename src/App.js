import React, { createContext, useState } from 'react';
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
import PrivateRouter from './Components/PrivateRouter/PrivateRouter';
export const userContext=createContext()
function App() {
  const [loggedInuser, loggedOutUser]=useState({})
  return (
    <userContext.Provider value={[loggedInuser, loggedOutUser]}>
     
      
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

        <PrivateRouter path="/hotelsroom/:hotel">
          <HotelsRoom/>
        </PrivateRouter>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
      
      

    </userContext.Provider>
  );
}

export default App;
