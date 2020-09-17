import React from 'react';
import "./Header.css"
import logo from '../../Logo.png'


const Header = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-light text-white">
  <div className="container">
  <a class="navbar-brand" href="#">
      <img src={logo} width="120" height="50" className="d-inline-block align-top" alt="" loading="lazy" style={{filter:"brightness(0) invert(1)"}}/>
      
    </a>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {/* <input class="form-control mr-2" type="search" placeholder="Search" aria-label="Search" style={{opacity: .6}}></input> */}
    
    <div class="wrapper">
      <div class="search_box">
          <input type="text" placeholder="what are you looking for?"/>
          
          {/* <i className="fas fa-search"></i> */}
          
      </div>
</div>
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <a className="nav-link text-white" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-white" href="#">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link  text-white" href="#">Link</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-white" href="#">Link</a>
        </li>
        
        
        
      </ul>
      <button className="btn btn-danger">Login</button>
      
    </div>
  </div>
</nav>
       
    </div>
  );
};

export default Header;

