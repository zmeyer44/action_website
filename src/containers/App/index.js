import React, { useState, useEffect, useContext } from "react"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../../context/auth"
import Layout from "../../components/FeedLayout"
import { Router } from "@reach/router"
import MainFeed from "../MainFeed"
import Explore from "../Explore"

let Page2 = () => <div>Page2</div>
const App = () => {
  return (
    <Layout>
      <Router>
        <Page2 path="/2" />
        <Explore path="/explore" />
        <MainFeed path="/" />
      </Router>
    </Layout>
  )
}

export default App
