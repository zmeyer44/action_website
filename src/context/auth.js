import React, { createContext, useState, useEffect, useContext } from "react"
import firebase from "gatsby-plugin-firebase"

export const AuthContext = createContext({})

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [currentUser, setUser] = useState()
  const [loading, setLoading] = useState(true)
  function getUserInfo(user) {
    return firebase.firestore().collection("users").doc(user.uid).get()
  }
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        getUserInfo(user).then(e => {
          setUser({ ...user, user: e.data() })
          setLoading(false)
        })
      } else {
        setUser(null)
        setLoading(false)
      }
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, setUser }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
