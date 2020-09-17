import React from 'react';
import "./Destination.css"


const Destination = ({cityInfo, handleBooking,borderStyle}) => {
  
  const {image,location}=cityInfo;


  return (
  <div className="text-white p-2 custom" onClick={()=>handleBooking(cityInfo)}>
    <img src={image} className="card-img" alt="..." style={{border:borderStyle}}/>
    <h3 style={{marginTop:"-60px",textAlign:"center"}}>{location}</h3>
</div>
  );
};

export default Destination;