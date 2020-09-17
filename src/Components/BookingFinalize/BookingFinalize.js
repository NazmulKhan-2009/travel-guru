import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { LocationData } from '../LocationData';
import StartBooking from '../StartBooking/StartBooking';

const BookingFinalize = () => {
  const {rootId}=useParams()
  const location=LocationData[rootId-1]
  console.log(location);

  const homeStyle={
    
    marginTop:"0px",
    // backgroundImage:'url("image/Rectangle 1.png")',
    backgroundImage:'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.8)), url("../image/Rectangle 1.png")',
    height:'100vh',
    backgroundRepeat:"no-repeat",
    backgroundSize:"100% 100%",
    backgroundPosition:"center",
    color:"white",
    
    }
  
  return (
    
    
    

    <div className='container-fluid' style={homeStyle}>
    <Header/>
    <div className='row p-5'>
      <div className='col-sm-12 col-md-6 mx-auto p-5'>
      <h1>{location.location}</h1>
      <h5 style={{textAlign:"justify"}}>{location.about}</h5>
      </div>

      <div className='col-sm-10 col-md-6 mx-auto'>
        <StartBooking city={location}/>
      </div>

    </div>
    </div>
  );
};

export default BookingFinalize;
