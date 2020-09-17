import React, { useState } from 'react';
import './SignUp.css'
import fbookIcon from '../../Icon/fb.png'
import googleIcon from "../../Icon/google.png"
const SignUp = () => {
  // const[]=useState()
  const [signup, setsignup]=useState(false)
  return (
    <div className='container nav_bg sign-in-wrapper'>
      <div className='row'>
        <div className='col-4 mx-auto bg-light my-form'>
        <h4>{signup ? "Create An Account":"Login In"}</h4>
            <form>
            {/* signup */}
            { signup &&  
            <label>
                <span>First Name</span>
                <input type="email" name="email"/>
              </label>
            }
            { signup &&
              <label>
                <span>Last Name</span>
                <input type="email" name="email"/>
              </label>
            }
            

            {/* signup */}

              <label>
                <span>Email Address</span>
                <input type="email" name="email"/>
              </label>

              <label>
                <span>Password</span>
                <input type="password" name="password"/>
              </label>
            {/* signup */}
              { signup &&<label>
                <span>Confirm Password</span>
                <input type="Password" name="email"/>
              </label>}
             {/* signup  */}
              
              <button class="submit" type="button">Sign In</button>
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
                    <button>Continue with Google</button>
                  </div>
                </div> 
                
          </div>
        </div>
      </div>
     
             
      
  
  );
};

export default SignUp;

