import React, { useState, useContext } from "react"
import * as Yup from "yup"
import Layout from "../components/layoutMin"
import Seo from "../components/seo"
import AuthForm from "../containers/AuthForm"
import { AuthContext } from "../context/auth"
import { signIn } from "../functions"

const Login = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const { setUser } = useContext(AuthContext)

  const onSubmit = (values, { setSubmitting }) => {
    setIsSuccess(false)
    setIsError(false)
    setSubmitting(true)

    return signIn(values).then(r => {
      console.log("FROM CLIENT", r)
      if (r.error) {
        setIsError(r.error.message)
      } else {
        setUser(r.result)
        setIsSuccess(true)
      }
    })
  }

  const form = {
    title: "Log In",
    action: "Log In",
    isSuccess,
    isError,
    onSubmit,
    validationSchema: Yup.object({
      email: Yup.string().email("Must be an email").required("Required"),
      password: Yup.string().required("Required"),
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
      {
        name: "password",
        label: "Password",
        placeholder: "Password",
        type: "password",
        initialValue: "",
      },
    ],

    authActions: [
      { text: "Forgot Password?", to: "password-reset" },
      { text: "Don't have an Account?", to: "register" },
    ],
  }

  return (
    <Layout>
      <Seo title="Login" />
      <AuthForm form={form} />
    </Layout>
  )
}

export default Login
