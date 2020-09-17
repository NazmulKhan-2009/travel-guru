import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import logo from "../../Logo.png"
// import SignUp from '../SignUp/SignUp';
import fbookIcon from '../../Icon/fb.png'
import googleIcon from "../../Icon/google.png"
import "./login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

  const history=useHistory()
    const location=useLocation()
    let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInuser, setloggedInUser]=useContext(userContext)
  const [signup, setsignup]=useState(false)
  const [newUser, setnewUser]=useState({
    email:"",
    password:"",
    name:"",
    phot:"",
    
})

if(firebase.apps.length===0){
  firebase.initializeApp(firebaseConfig);
}

// GOGGLE SIGN iN
const handleGoogleSignIn=()=>{
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    
    
    const {displayName, email} = result.user;
    const signedInUser={name:displayName, email:email} 
    setloggedInUser(signedInUser)
    history.replace(from)
    // console.log( newUserInfo)
    
    
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
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
     const newUserInfo={...newUser}
     newUserInfo[name]=value           
     setnewUser(newUserInfo)
 }
}
// FORM VALIDATION END
const handleSubmit=(e)=>{
  e.preventDefault()
  console.log( newUser.email , newUser.password)
  // if(newUser.email && newUser.password){
  //    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
  //    .catch(function(error) {
  //        // Handle Errors here.
  //        var errorCode = error.code;
  //        var errorMessage = error.message;
  //        console.log( errorCode , errorMessage)
  //        // ...
  //      });
  // }
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
      <button className="btn btn-danger">Login as {loggedInuser.name}</button>
      </div>
    </div>
  </div>
</nav>
      {/* SIGNING PART STRAT */}

      <div className='container nav_bg sign-in-wrapper'>
      <div className='row'>
        <div className='col-4 mx-auto bg-light my-form'>
        <h4>{signup ? "Create An Account":"Login In"}</h4>
            <form onSubmit={handleSubmit}>
            {/* signup */}
            { signup &&  
            <label>
                <span>First Name</span>
                <input type="text" name="firstname"/>
              </label>
            }
            { signup &&
              <label>
                <span>Last Name</span>
                <input type="text" name="lastname"/>
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
              { signup &&<label>
                <span>Confirm Password</span>
                <input type="Password" name="retype"/>
              </label>}
             {/* signup  */}
              
              {/* <button class="submit" type="button" >Sign In</button> */}
              <input type="submit" value="Submit"/>
            </form>
            <p style={{textAlign:"center"}}>{signup ? "Already have An Account ? ":"Don't Have account ?"  }<span onClick={()=>setsignup(!signup)} style={{color:"#F9A51A",cursor:"pointer"}}>{signup? " SignIn" :" Create Account"}</span></p>  
            <span>____________________Or__________________</span>   
                
                <div className="social-btn">
                  <div className="facebook-btn">
                    <img src={fbookIcon} alt="" width="40"/>
                    <button>Continue with FaceBook</button>
                  </div>

                  <div className="google-btn">
                    <img src={googleIcon} alt="" width="40"/>
                    <button onClick={handleGoogleSignIn}>Continue with Google</button>
                  </div>
                </div> 
                
          </div>
        </div>
      </div>


      
      {/* SIGNING PART END */}
      {/* <SignUp/> */}
    </div>
  );
};

export default Login;