import React from "react"
import { Helmet } from "react-helmet"
import { Router } from "@reach/router"
import PrivateRoute from "../components/PrivateRoute"
import Home from "../containers/App"
import Login from "../adminPages/login"
import Register from "../adminPages/register"
import NewPassword from "../adminPages/new-password"
import PasswordReset from "../adminPages/password-reset"
import CompleteProfile from "../adminPages/complete-profile"

const App = () => {
  return (
    <>
      <Helmet>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Helmet>
      <Router>
        <PrivateRoute path="/app/feed/*" component={Home} />
        {/* <PrivateRoute path="/app/mfeed" component={MobileFeed} /> */}
        <Register path="/app/register" />
        <NewPassword path="/app/new-password" />
        <PasswordReset path="/app/password-reset" />
        <CompleteProfile path="/app/complete-profile" />
        <Login path="/app/*" />
      </Router>
    </>
  )
}

export default App
