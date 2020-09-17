import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import HotelReservation from '../HotelReservation/HotelReservation';
import { LocationData } from '../LocationData';
import logo  from "../../Logo.png"
import { userContext } from '../../App';

const HotelsRoom = () => {
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  const {hotel}=useParams()

  console.log( hotel)
  const rooms=LocationData[hotel-1]
  console.log( rooms.roomDetails)
  const details=rooms.roomDetails
  

  const signOut=()=>{
    setloggedInUser({
      name:"",
      email:"",      
      photo:"",
      error:"",
    })
  }

  return (
   
       
<div>

  {/* nav Starts*/}
  <nav className="navbar navbar-expand-lg navbar-light text-white">
  <div className="container">
  <a class="navbar-brand" href="/home">
      <img src={logo} width="120" height="50" className="d-inline-block align-top" alt="" loading="lazy" />
      
    </a>
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
    
    
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ml-auto">
        <li className="nav-item pl-5">
          <Link className="nav-link text-dark" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item pl-5 ">
          <Link className="nav-link text-dark" to="#">Destination</Link>
        </li>
        <li className="nav-item pl-5 ">
          <Link className="nav-link  text-dark" to="#">Blog</Link>
        </li>
        <li className="nav-item pl-5 ">
          <Link className="nav-link text-dark" to="#">Contact</Link>
        </li> 
           
         
      </ul>
      
      <div className="text-center">
      <button className="btn btn-danger">Login as {loggedInuser.name || loggedInuser.email}</button>
      {
       loggedInuser.isSignedIn && <button onClick={signOut} className="btn btn-danger" >Sign Out</button>
      }
      </div>
    </div>
  </div>
</nav>
{/* nav end */}
<div className='container'>
 <div className='row'>
  <div className='col-md-6 mx-auto'>
  <p className='mt-3'>252 stays Apr 13-17 3 guests</p>
  <h4 className="mx-auto">Stay At {rooms.location}</h4>
  {
         details.map(hotelData=>  
         <HotelReservation hotelData={hotelData}/>
         )
       }
  </div>

  <div className='col-md-6 mx-auto mt-5'>
     <img src="https://www.google.com/maps/d/thumbnail?mid=1GC-26pGg4Z58eto8mukpi6dyUj4&hl=en" alt=""/>
     </div>
 </div>
</div>
</div>

  );
};

export default HotelsRoom;

