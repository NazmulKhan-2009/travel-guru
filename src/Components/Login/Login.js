import React, { useContext } from 'react';
import { userContext } from '../../App';
import logo from "../../Logo.png"
import SignUp from '../SignUp/SignUp';

const Login = () => {
  const [loggedInuser, setloggedInuser]=useContext(userContext)
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light text-white">
  <div className="container">
  <a class="navbar-brand" href="/home">
      <img src={logo} width="120" height="50" className="d-inline-block align-top" alt="" loading="lazy" />
      
    </a>
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
    
    
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ml-auto">
        <li className="nav-item pl-5">
          <a className="nav-link text-dark" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item pl-5 ">
          <a className="nav-link text-dark" href="#">Link</a>
        </li>
        <li className="nav-item pl-5 ">
          <a className="nav-link  text-dark" href="#">Link</a>
        </li>
        <li className="nav-item pl-5 ">
          <a className="nav-link text-dark" href="#">Link</a>
        </li> 
           
         
      </ul>
      
      <div className="text-center">
      <button className="btn btn-danger">Login</button>
      </div>
    </div>
  </div>
</nav>
      <h1>Login Here </h1>
      <SignUp/>
    </div>
  );
};

export default Login;