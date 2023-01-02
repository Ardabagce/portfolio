import React, { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Login from '../../Pages/Login'
import { auth } from '../../firebase.config'

const useAuth = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return () => unsubscribe()
  }, [])

  return user
}

const ProtectedRoutes = () => {
  const user = useAuth()
  return user ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoutes