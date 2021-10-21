import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import GetStarted from "../containers/GetStarted"

const GetStartedPage = () => {
  return (
    <Layout style={{ zIndex: 1 }}>
      <Seo title="Home" />
      <GetStarted />
    </Layout>
  )
}

export default GetStartedPage
