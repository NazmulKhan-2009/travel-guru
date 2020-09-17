import React from 'react';
import { useParams } from 'react-router-dom';

const HotelsRoom = () => {
  const {hotel}=useParams()
  console.log( hotel)
  return (
    <div>
       <h1>Hotelrooms Page Here {hotel}</h1>
    </div>
  );
};

export default HotelsRoom;