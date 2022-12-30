// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBHqW6dP0j1M2jMXD7Je9ItHq_K3QAW6xk",
  authDomain: "portfolio-5a4c5.firebaseapp.com",
  projectId: "portfolio-5a4c5",
  storageBucket: "portfolio-5a4c5.appspot.com",
  messagingSenderId: "597809129645",
  appId: "1:597809129645:web:b7e9fe5f4df956be843e24",
  measurementId: "G-ZJ1V70X37J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);

const Provider = new GoogleAuthProvider();

export const userData = auth.currentUser

export const signInWithGoogle=()=>{
  signInWithPopup(auth,Provider).then((result)=>{
    return(
      <div>Giriş Başarılı</div>
    )
  }).catch((error)=>{
    alert(error)
  })
}