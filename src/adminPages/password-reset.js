import React, { useState } from "react"
import * as Yup from "yup"
import Layout from "../components/layoutMin"
import Seo from "../components/seo"
import AuthForm from "../containers/AuthForm"
import { resetPassword } from "../functions"

const PasswordReset = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isMessage, setIsMessage] = useState(false)

  const onSubmit = (values, { setSubmitting }) => {
    setIsSuccess(false)
    setIsError(false)
    setIsMessage(false)
    setSubmitting(true)

    return resetPassword(values).then(r => {
      if (r.error) {
        setIsError(r.error.message)
      } else {
        setIsMessage("Email Sent!")
        setIsSuccess(true)
      }
    })
  }

  const form = {
    title: "Reset Password",
    action: "Reset",
    isMessage,
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

    authActions: [
      // { text: "Don't have an Account?", to: "app/register" },
      { text: "Log In", to: "app/login" },
    ],
  }

  return (
    <Layout>
      <Seo title="Password Reset" />
      <AuthForm form={form} />
    </Layout>
  )
}

export default PasswordReset
