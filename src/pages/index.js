import React, { useEffect, useState } from "react"
import * as Yup from "yup"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Welcome from "../containers/Welcome"
import Schools from "../containers/Schools"
import Features from "../containers/Features"
import Steps from "../containers/Steps"
import Examples from "../containers/Examples"
import Support from "../containers/Support"
import Modal from "../components/Modal"
import axios from "axios"

const IndexPage = () => {
  const [modal, setModal] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [state, setState] = useState({})
  useEffect(() => {
    document.body.style.backgroundColor = ""
  }, [])

  const onSubmit = (values, { setSubmitting }) => {
    setIsSuccess(false)
    setIsError(false)
    setSubmitting(true)

    return axios
      .post("https://www.getwaitlist.com/waitlist", {
        email: values.email,
        api_key: "QCWIZP",
        referral_link: window.location.href,
      })
      .then(response => {
        console.log(response)
        var registered_email = response["data"]["registered_email"]
        var current_priority = response["data"]["current_priority"]
        var total_waiters_currently =
          response["data"]["total_waiters_currently"]
        var referral_link = response["data"]["referral_link"]
        setState({
          email_submitted: registered_email,
          priority_number: current_priority,
          total_users: total_waiters_currently,
          ref_link: referral_link,
        })
        setIsSuccess(true)
      })
      .catch(error => {
        setState({
          error_info:
            "Some error occured unfortunately. Check your value or let me know: bani (at) banisingh.io",
        })
        console.log(error.response)
      })

    // return signIn(values).then(r => {
    //   if (r.error) {
    //     setIsError(r.error.message)
    //   } else {
    //     setUser(r.result)
    //     setIsSuccess(true)
    //   }
    // })
  }

  const form = {
    title: "Join Waitlist!",
    action: "Join",
    isSuccess,
    isError,
    onSubmit,
    validationSchema: Yup.object({
      email: Yup.string().email("Must be an email").required("Required"),
    }),
    // eslint-disable-next-line no-undef

    fields: [
      {
        name: "email",
        label: "E-mail",
        placeholder: "ie. john.doe@email.com",
        type: "email",
        initialValue: "",
      },
    ],
  }
  return (
    <Layout style={{ zIndex: 1 }}>
      <Seo title="Home" />
      <Welcome id="welcome" setModal={setModal} />
      {/* <Schools /> */}
      {/* <Features id="features" /> */}
      <Steps id="steps" />
      <Examples id="about" setModal={setModal} />
      <Support id="support" />
      <Modal
        modal={modal}
        setModal={setModal}
        form={form}
        isSuccess={isSuccess}
        state={state}
      />
    </Layout>
  )
}

export default IndexPage
