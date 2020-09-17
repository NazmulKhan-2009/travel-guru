import React, { useState } from 'react';
import Destination from '../Destination/Destination';
import Header from '../Header/Header';
import { LocationData } from '../LocationData';




const Home = () => {

  
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
    // backgroundImage:'url("image/Rectangle 1.png")',
    backgroundImage:'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.8)), url("image/Rectangle 1.png")',
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
            <h1 style={{color:"white"}}>{booking.location}</h1>
            <p style={{color:"white"}}>{booking.history}</p>
            {
              booking.isBooking && <a href={`/bookingfinalize/${booking.id}`} className="btn btn-danger">Booking</a>
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