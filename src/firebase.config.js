// Import the functions you need from the SDKs you need
import toast from "react-hot-toast"
import { initializeApp } from "firebase/app"; 
import {createUserWithEmailAndPassword, getAuth,signInWithEmailAndPassword} from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth();
export const userData = auth.currentUser



export const register = async (email,password) =>{
  try{const {user} = await createUserWithEmailAndPassword(auth,email,password);
  return user}
  catch(error){toast(error.message)}
}
export const signin = async(email,password)=>{
  try{const {user} = await signInWithEmailAndPassword(auth,email,password)
  return user}
  catch(error){toast(error.message)}
}