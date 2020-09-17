import React, { useContext } from 'react';
import "./Header.css"
import logo from '../../Logo.png'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';


const Header = () => {
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  console.log(loggedInuser);


  
  return (
    <div className='container nav_bg'>
      <div className='row'>
        <div className='col-md-12 mx-auto'>
          <nav className="navbar navbar-expand-lg navbar-light text-white">
            <div className="container">
            
            <a class="navbar-brand" href="/home">
            <img src={logo} width="120" height="50"  alt="" style={{filter:"brightness(0) invert(1)"}}/>
            </a> 
            <div class="wrapper">
            <div class="search_box">
            <input type="text" placeholder="Search Location"/>
          
              
          </div>
          </div>
          

          <ul className="navbar-nav mr-auto ml-0">
            <li className="nav-item ">
              <Link className="nav-link text-white" aria-current="page" href="/home">Home</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white" href="#">Destination</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-white" href="#">Blog</Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white" href="#">contact</Link>
            </li>      
          </ul>

      <Link><button className="btn" style={{background:"#F9A51A"}}> {loggedInuser.isSignedIn? "Log Out" : "Login" }</button></Link> 
      
    
  </div>
</nav>
       <h4 style={{color:"#F9A51A"}}>{loggedInuser.name ||loggedInuser.email}</h4>
       </div>
 </div>
</div>
  );
};

export default Header;

