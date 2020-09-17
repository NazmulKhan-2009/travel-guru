import React, { useState } from 'react';
// import Calendar from 'react-calendar'
import DatePicker from 'react-date-picker';
import { Link } from 'react-router-dom';
import "./StartBooking.css"
const StartBooking = (props) => {
  // console.log(props)
  const {id}=props.city
  console.log( id)
  const [fromDate, setfromDate] = useState(new Date());
  const [toDate, settoDate] = useState(new Date());
  return (

    <div className="booking p-4">
      <div className="p-2">
      <label for="formGroupExampleInput" className="form-label text-dark font-weight-bold">Origin</label>       
         <select class="form-select" aria-label="Default select example">
           <option selected>From</option>
           <option >Dhaka</option>
           <option>Chattagram</option>
           <option>Cumilla</option>
           <option>Rajshahi </option>
           <option>Jashore</option>
           <option>Sylhet </option>
           <option>Dinajpur</option>
           <option>Barisal</option>
           <option>Faridpur </option>
           <option>Noakhali </option>
           <option>Bogra </option>
           <option>Pabna </option>
           <option>Kushtia </option>
           <option>Khulna  </option>
         </select>
      </div>

      <div className="p-2">
        <label for="formGroupExampleInput" className="form-label text-dark">Destination</label>       
          <select class="form-select" aria-label="Default select example">
            <option selected>To</option>
            <option value="1">Coxes Bazar</option>
            <option value="2">Sreemongol</option>
            <option value="3">Sajek</option>
          </select>
      </div>
      
        
      <div className="date-pick">
      
          <span >From</span><br/>
          <DatePicker
            onChange={setfromDate}
            value={fromDate}
            format={"yy-M-dd"}
            minDate={new Date()}

          />
      
      </div>

      <div className="date-pick">
            <span >To</span><br/>
            <DatePicker
              
              onChange={settoDate}
              value={toDate}
              format={"yy-M-dd"}
              minDate={new Date()}
            />      
     </div>

      <div className="wrapper">
        <Link to={`/hotelsroom/${id}`}><button className="start-Booking">Start Booking</button></Link>
      </div>

      
      </div>
    
  );
};

export default StartBooking;