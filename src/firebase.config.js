// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
import {getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: process.env.REACT_AUTH_DOMAIN,
  projectId: process.env.REACT_PROJECT_ID,
  storageBucket: process.env.REACT_STOREGE_BUCKET,
  messagingSenderId:process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_MEASUREMENT_ID
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