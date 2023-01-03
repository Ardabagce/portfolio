// Import the functions you need from the SDKs you need
import toast from "react-hot-toast"
import { initializeApp } from "firebase/app"; 
import {onAuthStateChanged ,createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,signInWithEmailAndPassword,signOut,signInWithPopup } from "firebase/auth"

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

export const auth =getAuth( );

const Provider = new GoogleAuthProvider();

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
export const signInWithGoogle=()=>{
  signInWithPopup(auth,Provider).then((result)=>{
    return(
      result
    )
  }).catch((error)=>{
    alert(error)
  })
}
export const logOut=async()=>{
  localStorage.removeItem('user'); // delete user item from local storage
  try{
    await signOut(auth)
    return true
  } catch(error){
    toast.error(error.message) 
  }
}

onAuthStateChanged(auth,(user)=>{
  if(user){
    console.log('User',user)
  }
  else{
    console.log('Kullanıcı oturumu kapattı')
  }
})