import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import Destination from '../Destination/Destination';
import Header from '../Header/Header';
import { LocationData } from '../LocationData';
import backgroundImage from "../../Image/Rectangle 1.png";




const Home = () => {
  const [loggedInuser, setloggedInUser]=useContext(userContext)

  
  const [booking, setBooking]=useState({
    location:"Grab Your Happiness moment",
    history:"",
    isBooking:false,
    borderStyle:"",
    id:""
    
    
  })
  console.log( booking)
  const location=LocationData
  const homeStyle={
    
    marginTop:"0px",
    
    backgroundImage:'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.8)), url("https://lh3.googleusercontent.com/q1SdVBzlr6aas2_bqE-2z9wLHcuPRs_mXen0z5S1W8j8hgDXDZPcPzgXPjoMUklMvzUFKqLWDA8aV2qVS5YCR6wZY_snrOq1jnENTihOtRRtwU0EeWlp8lQLnM7fWrorUVqhRQyNnA=w2400")',

    
    height:'100vh',
    backgroundRepeat:"no-repeat",
    backgroundSize:"100% 100%",
    backgroundPosition:"center",
    }
    
    const handleBooking=(bookingPlace)=>{
      setBooking({
        location:bookingPlace.location,
        history:bookingPlace.history,
        id:bookingPlace.id,
        isBooking:true,
        
      })   
      
    }
  

  return (

    <div style={homeStyle}>
    <Header/>
      <div className="container p-5">
        <div className="row">

          <div className="col-sm-10 col-md-4">
            <h1 style={{color:"white",fontFamily: "'MuseoModerno', cursive",fontSize:"50px"}}>{booking.location}</h1>
            <p style={{color:"white"}}>{booking.history}</p>
            {
              booking.isBooking && <a href={`/bookingfinalize/${booking.id}`} className="btn" style={{background:"#F9A51A"}}>Booking</a>
            }
          </div>
          <div className="col-sm-10 col-md-8" style={{display: 'flex'}}>
           {
              location.map(cityInfo=><Destination
                
                key={cityInfo.id}
                cityInfo={cityInfo}
                handleBooking={handleBooking}
                

              />)
           }
          </div>
          
        </div>
      </div>
      
    </div>
  
    
    
  );
};

export default Home;