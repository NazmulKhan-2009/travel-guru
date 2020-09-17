import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config' ;


export const initializeLoginFramework=() => {

  if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
  }
  
};

// *******START// GOOGLE HANDLE*********************
export const handleGoogleSignIn=()=>{
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(googleProvider)
  .then(res=>{
    const {displayName, photoURL , email}=res.user
    const signedInUser={
      isSignedIn:true,
      name:displayName,
      email:email,     
      photo:photoURL,
      success:true
    }

    return signedInUser
    
  })
  .catch(err=>{
    console.log(err.error)
    console.log(err.Message)
  })

}
// *******END// GOOGLE HANDLE*********************

// ****START// FACEBOOK HANDLE*************************

export const handleFbSignIn=()=>{
  const fbProvider = new firebase.auth.FacebookAuthProvider();
 return firebase.auth().signInWithPopup(fbProvider)
 .then(res=> {
  const {displayName, photoURL , email}=res.user
  const signedInUser={
    isSignedIn:true,
    name:displayName,
    email:email,     
    photo:photoURL,
    success:true
  }

  return signedInUser
    
  }).catch(function(error) {
   
    var errorCode = error.code;
    var errorMessage = error.message;

    
    console.log(errorCode, errorMessage )
  });
}
// ****END// FACEBOOK HANDLE*************************

// START**// SIGN OUT***************
export const handleSignOut=()=>{
  return firebase.auth().signOut()
  .then(res=>{
    
    const signedOutUser={
      isSignedIn:false,
      name:"",
      email:"",      
      photo:"",
      error:"",
      success:false
    }

    return signedOutUser
  })
  .catch(err=>{

  })

}
// END**// SIGN OUT***************


// ********START //USER CREATION**************************
export const createUserWithEmailAndPassword =(name,email,password)=> {
  return firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(res=>{
        console.log( res)
        const newUserInfo=res.user
       
        newUserInfo.error="";
        newUserInfo.success=true
          
        updateUserName(name)
        return newUserInfo
        
      })
      
      .catch(error=> {
        

        const newUserInfo={}       
        newUserInfo.error=error.message
        newUserInfo.success=false
        return newUserInfo
        
      });

}

// ********END //USER CREATION**************************


// START//SIGN IN *****************
export const signInWithEmailAndPassword=(email, password)=>{
  return firebase.auth().signInWithEmailAndPassword(email, password)
  .then(res=>{
    
    const signedInUser={
      isSignedIn:true,
      
      email:email,     
      
      success:true
    }
  
    return signedInUser

   
  })
  .catch(error=> {
    
    const newUserInfo={}       
    newUserInfo.error=error.message
    newUserInfo.success=false
    



  });

}
// END//SIGN IN *****************


// *******START//UPDATE USER NAME**********
 const updateUserName=name=>{
  const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name,
  
}).then(function() {
  console.log( "user Info Updated Succesfully")
}).catch(function(error) {
  console.log(error);
});
}
// *******END//UPDATE USER NAME**********