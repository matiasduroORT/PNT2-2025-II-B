'use client'

import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext) 


export default function AuthProvider({children}) {

  const userStorage = localStorage.getItem("user")
  const isAuthStorage = localStorage.getItem("isAuthenticated")

  const [user, setUser] = useState(userStorage || null);
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(isAuthStorage || false)

  const router = useRouter()

  const login = async(userData) => {

    console.log("userData: ", userData);
    
    const resp = await fetch("https://690a7b2a1a446bb9cc22a9cd.mockapi.io/users")
    const data = await resp.json();

    console.log("data: ", data);
    
    const userFind = data.find(u => u.email === userData.email && u.password === userData.password)

    console.log("user: ", userFind);
    
    if(userFind){
      setUser(userFind)
      setIsAuthenticated(true)

      localStorage.setItem("user", JSON.stringify(userFind))
      localStorage.setItem("isAuthenticated", JSON.stringify(true))

      router.push("/")
      return userFind
    }else{
      setIsAuthenticated(false)
      return {error: "Usuario o Password Incorrectos"}
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(null)
    localStorage.removeItem("user")
    localStorage.removeItem("isAuthenticated")
  }




  return (
    <AuthContext.Provider value={{user, loading, login, isAuthenticated}}>
        {children}
    </AuthContext.Provider>
  )
}
