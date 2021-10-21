import React from "react"
import Layout from "../components/layoutMin"
import Seo from "../components/seo"
import UploadImages from "../containers/UploadImages"

const CompleteProfile = () => {
  return (
    <Layout>
      <Seo title="CompleteProfile" />
      <UploadImages />
    </Layout>
  )
}

export default CompleteProfile
