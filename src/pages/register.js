import React, { useState, useContext, useEffect } from "react"
import { navigate } from "gatsby"
import * as Yup from "yup"
import Layout from "../components/layoutMin"
import Seo from "../components/seo"
import AuthForm from "../containers/AuthForm"
import { AuthContext } from "../context/auth"
import { signUp } from "../functions"

const Register = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    if (currentUser?.uid) {
      navigate("/complete-profile")
    }
  }, [currentUser])

  const onSubmit = (values, { setSubmitting }) => {
    setIsSuccess(false)
    setIsError(false)
    setSubmitting(true)

    return signUp(values).then(r => {
      if (r.error) {
        setIsError(r.error.message)
      } else {
        setIsSuccess(true)
      }
    })
  }

  const form = {
    title: "Sign Up",
    action: "Sign Up",
    isSuccess,
    isError,
    onSubmit,
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Must be an email").required("Required"),
      password: Yup.string().required("Required"),
    }),
    // eslint-disable-next-line no-undef

    fields: [
      {
        name: "firstName",
        label: "First Name",
        placeholder: "ie. John",
        type: "text",
        initialValue: "",
        half: true,
      },
      {
        name: "lastName",
        label: "Last Name",
        placeholder: "ie. Doe",
        type: "text",
        initialValue: "",
        half: true,
      },
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

    authActions: [{ text: "Already have an Account?", to: "login" }],
  }

  return (
    <Layout>
      <Seo title="Register" />
      <AuthForm form={form} />
    </Layout>
  )
}

export default Register
