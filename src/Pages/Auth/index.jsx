import React, { useEffect } from 'react'
//auth
import { auth,provider } from '../../Config/firebase.config'
import "./auth.css"
import { signInWithPopup } from 'firebase/auth'

import { useGetUserInfo } from "../../Hooks/useGetUserInfo"


import { Navigate, useNavigate } from 'react-router-dom'
export default function Auth() {
  const b = useNavigate();
  const {isAuth} = useGetUserInfo();
  const signInWithGoogle = async ()=>{
    const result = await signInWithPopup(auth,provider);
   
   console.log(result.user)
    const authInfo  = {
      userID:result.user.uid,
      name:result.user.displayName,
      profilePhoto:result.user.photoURL,
      isAuth:true,
    };

   localStorage.setItem("auth",JSON.stringify(authInfo));
    

  }
  //agar phle se login hoga to y krna
 
  
if(isAuth){
  return <Navigate to = "/expense-tracker"></Navigate>
}

  // useEffect(()=>{
  //   if(isAuth){
  //     b("/expense-tracker");
  //   }
  // },[])
  return (
    <div className = "login-page">
      <h1>Signin with Google to continue</h1>
      <button className="login-with-google-btn"  onClick = {signInWithGoogle}><img className='google_logo' src = "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"></img> 
      Sign in with google</button>
    </div>
  )
}
