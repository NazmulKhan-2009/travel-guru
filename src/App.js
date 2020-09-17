import React, { createContext, useState } from 'react';
import './App.css';
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
  const [loggedInuser, setloggedInUser]=useState({})
  return (
    <userContext.Provider value={[loggedInuser, setloggedInUser]}>
     
       
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
