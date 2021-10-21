import { navigate } from "gatsby"
import React, { useState, useEffect } from "react"
import * as Yup from "yup"
import Layout from "../components/layoutMin"
import Seo from "../components/seo"
import AuthForm from "../containers/AuthForm"
import { newPassword, verifyResetCode } from "../functions"

const NewPassword = ({ location }) => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isMessage, setIsMessage] = useState(false)
  const [code, setCode] = useState("")
  const [mode, setMode] = useState("")
  const [codeError, setCodeError] = useState(false)

  useEffect(() => {
    console.log("Location: ", location)
    const params = new URLSearchParams(location.search)
    const urlMode = params.get("mode")
    const urlCode = params.get("oobCode")
    if (!urlMode) {
      setMode("unset")
    } else {
      setMode(urlMode)
    }
    if (!urlCode) {
      setCode("unset")
    } else {
      setCode(urlCode)
    }
  }, [location])

  // Validate code
  useEffect(() => {
    if (code) {
      verifyResetCode(code).then(r => {
        if (r) {
          setCodeError(true)
        }
      })
    }
  }, [code])

  const onSubmit = (values, { setSubmitting }) => {
    setIsSuccess(false)
    setIsError(false)
    setIsMessage(false)
    setSubmitting(true)

    return newPassword(code, values).then(r => {
      if (r.error) {
        setIsError(r.error.message)
      } else {
        setIsMessage("Password Changed!")
        setIsSuccess(true)
      }
    })
  }

  const resetPassword = {
    title: "Reset Password",
    action: "Confirm",
    isMessage,
    isSuccess,
    isError,
    onSubmit,
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Password is too short")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    // eslint-disable-next-line no-undef

    fields: [
      {
        name: "password",
        label: "New Password",
        placeholder: "New Password",
        type: "password",
        initialValue: "",
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        placeholder: "Repeat Password",
        type: "password",
        initialValue: "",
      },
    ],

    authActions: [
      { text: "Return Home?", to: "" },
      { text: "Log In", to: "login" },
    ],
  }
  const invalidCode = {
    title: "Invalid Link",
    action: "Return Home",
    isMessage,
    isSuccess,
    isError,
    onSubmit: () => navigate("/"),
    validationSchema: "",
    // eslint-disable-next-line no-undef

    fields: [],

    authActions: [
      { text: "Return Home?", to: "" },
      { text: "Log In", to: "login" },
    ],
  }

  return (
    <Layout>
      <Seo title="Enter New Password" />
      <AuthForm
        form={
          codeError
            ? invalidCode
            : mode === "resetPassword"
            ? resetPassword
            : invalidCode
        }
      />
    </Layout>
  )
}

export default NewPassword
