import React, { useContext } from "react"
import { navigate } from "gatsby"
import { AuthContext } from "../context/auth"
const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const { currentUser } = useContext(AuthContext)

  if (!currentUser) {
    navigate("/login")
    return null
  } else {
    console.log("CURRENT USER:::", currentUser)
  }
  return <Component {...rest} />
}
export default PrivateRoute
