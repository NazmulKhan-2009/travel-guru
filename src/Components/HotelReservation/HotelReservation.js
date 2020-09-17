import React, { useContext } from 'react';
import { userContext } from '../../App';

const HotelReservation = ({hotelData}) => {
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  const {title,image,p1,p2,p3,rating,price,other}=hotelData;
  
  return (
    
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 mx-auto'>
        <img src={image} alt="" width="200"/>
        </div>

        <div className='col-md-6 mx-auto'>
        <h5>{title}</h5>
        <p style={{fontSize:"14px",lineHeight:"5px"}}>{p1}</p>
        <pre >
          
          <p style={{lineHeight:"1"}}>{p2}</p>
          <p style={{lineHeight:"0"}}>{p3}</p>
          <span style={{color:"orange",fontSize:"20px"}}>★</span> {rating}   <span>${price}</span>    <span style={{color:"gray"}}>{other}</span>
        </pre>
        </div>
      </div>
    </div>

  );
};

export default HotelReservation;

