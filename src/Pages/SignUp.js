import React, { useState, useEffect } from 'react';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../firebase.config'

export default function SignUp() {
    const[signUpEmail,setSignUpEmail]=useState("")
    const[signUpPass,setSignUpPass]=useState("")
    const signup=async()=>{try{
      const user=await createUserWithEmailAndPassword(auth, signUpEmail,signUpPass)
      console.log(user)
    }

    catch(error){console.log(error)}
    };
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setCurrentUser(user)
        } else {
          setCurrentUser(null)
        }
      })
      return () => unsubscribe()
    }, [])
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
                    SignUp{currentUser}
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(event)=>{setSignUpEmail(event.target.value)}}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={(event)=>{setSignUpPass(event.target.value)}}
                        />
                    </div>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                        onClick={signup}>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}