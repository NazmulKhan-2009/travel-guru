import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import logo from "../../Logo.png"

import fbookIcon from '../../Icon/fb.png'
import googleIcon from "../../Icon/google.png"
import "./login.css";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

const Login = () => {
  

  const history=useHistory()
    const location=useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInuser, setloggedInUser]=useContext(userContext)

  const [newuser, setNewuser]=useState(false)
  
  const [user, setUser]=useState({
    email:"",
    password:"",
    name:"",
    photo:"",
    isSignedIn:false, 
    error:'',
    success:false
})


initializeLoginFramework();



// START FaceBook SIGN IN****************
  const fbSignIn=()=>{
    handleFbSignIn()
    .then(res=>{
    handleResponse(res, true)
    })
  }
  //END FaceBook SIGN IN***

// GOGGLE SIGN iN
const GoogleSignIn=()=>{
  handleGoogleSignIn()
      .then(res=>{
        handleResponse(res, true)
        

      })
  
}

// FORM VALIDATION START
const handleValidation=e=>{
  let isFormValid=true;   
 const {name,value}=e.target
 
 if(name==="email"){
     isFormValid= /\S+@\S+\.\S+/.test(value)
     
 }
 if(name==="password"){
     const isPassInFormet=/\d{1}/.test(value)
     const isPassLength=value.length>=6
     isFormValid=isPassInFormet && isPassLength
 }
 if(isFormValid){
     const newUserInfo={...user}
     newUserInfo[name]=value           
     setUser(newUserInfo)
 }
}
// FORM VALIDATION END
const handleSubmit=(e)=>{
  e.preventDefault()
  
  if(newuser && user.email && user.password){

    createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res=>{
        handleResponse(res, true)
        

      })

    
  }
  if(!newuser && user.email && user.password){
    signInWithEmailAndPassword(user.email, user.password,)
    .then(res=>{
      handleResponse(res, true)
      
    })
  }
}

const signOut=()=>{
  handleSignOut()
  .then(res=>{
    handleResponse(res, false)
   
  })
}
const handleResponse=(res, redirect)=>{
  setUser(res)
  setloggedInUser(res)
  if(redirect){
    history.replace(from);
  }
  
 }



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
          <Link className="nav-link text-dark" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item pl-5 ">
          <Link className="nav-link text-dark" to="#">Destination</Link>
        </li>
        <li className="nav-item pl-5 ">
          <Link className="nav-link  text-dark" to="#">Blog</Link>
        </li>
        <li className="nav-item pl-5 ">
          <Link className="nav-link text-dark" to="#">contact</Link>
        </li> 
           
         
      </ul>
      
      <div className="text-center">
      {
        newuser && <button onClick={signOut} className="btn btn-danger" >Sign Out</button>
      }
      
      </div>
    </div>
  </div>
</nav>
      {/* SIGNING PART STRAT */}

      <div className='container nav_bg sign-in-wrapper'>
      <div className='row'>
        <div className='col-4 mx-auto bg-light my-form'>
        <h4>{newuser ? "Create An Account":"Login In"}</h4>
            <form onSubmit={handleSubmit}>
            {/* signup */}
            { newuser &&  
            <label>
                <span>First Name</span>
                <input type="text" name="firstname" onBlur={handleValidation}/>
              </label>
            }
            { newuser &&
              <label>
                <span>Last Name</span>
                <input type="text" name="lastname" onBlur={handleValidation}/>
              </label>
            }
            

            {/* signup */}

              <label>
                <span>Email Address</span>
                <input type="email" name="email" onBlur={handleValidation} required/>
              </label>

              <label>
                <span>Password</span>
                <input type="password" name="password" onBlur={handleValidation} required/>
              </label>
            {/* signup */}
              { newuser &&<label>
                <span>Confirm Password</span>
                <input type="Password" name="retype"/>
              </label>}
             {/* signup  */}
              
              {/* <button class="submit" type="button" >Sign In</button> */}
              <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
            <p style={{textAlign:"center"}}>{newuser ? "Already have An Account ? ":"Don't Have account ?"  }<span onClick={()=>setNewuser(!newuser)} style={{color:"#F9A51A",cursor:"pointer"}}>{newuser? " Sign In" :" Create Account"}</span></p>  
            <span>____________________Or__________________</span>   
                
                <div className="social-btn">
                  <div className="facebook-btn">
                    <img src={fbookIcon} alt="" width="40"/>
                    <button onClick={fbSignIn} className="btn-block">Continue with FaceBook</button>
                  </div>

                  <div className="google-btn">
                    <img src={googleIcon} alt="" width="40"/>
                    <button onClick={GoogleSignIn}>Continue with Google</button>
                  </div>
                </div> 
                
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;