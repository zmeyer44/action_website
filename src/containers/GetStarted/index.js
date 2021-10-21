import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { contactTicket } from "../../functions"
import { GetStartedWrapper } from "./styled.components"
import Input from "../../components/Formik/Input"
import Submit from "../../components/Formik/Submit"
import Title from "../../components/Title"

const mailer = {
  title: "Ready to change the way you browse the web?",
  text: "Send us a message",
  sendButtonText: "Send message",
  successMessage:
    "Thank you for reaching out. Someone from out team will respond as soon as possible.",
  errorMessage:
    "An error occurred. Can't create a ticket now. Please retry later.",
}
const form = {
  validationSchema: Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Must be an email").required("Required"),
    message: Yup.string().required("Required"),
  }),
  // eslint-disable-next-line no-undef

  fields: [
    {
      name: "name",
      label: "Name",
      placeholder: "ie. John Doe",
      initialValue: "",
    },
    {
      name: "email",
      label: "E-mail",
      placeholder: "ie. john.doe@email.com",
      type: "email",
      initialValue: "",
    },
    {
      name: "message",
      label: "Message",
      placeholder: "Start typing here...",
      multiline: true,
      initialValue: "",
    },
  ],
}

const GetStartedContainer = props => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const onSubmit = async (values, { setSubmitting }) => {
    setIsSuccess(false)
    setIsError(false)
    setSubmitting(true)

    try {
      const res = await contactTicket(values)

      if (res) {
        setIsSuccess(true)
      } else {
        setIsError(true)
      }
    } catch (_) {
      setIsError(true)
    }
  }

  return (
    <GetStartedWrapper>
      <Title title="Your Feed" subtitle="Here's what people have been doing" />

      <div className="container">
        <div className="main_section">
          <div className="form">
            <Fade bottom cascade duration={600}>
              <span>
                <h4>{mailer.title}</h4>
              </span>
              <span>
                <span className="subtext">{mailer.text}</span>
              </span>
            </Fade>

            <div className="form_section">
              <Fade duration={600} collapse when={!!isSuccess}>
                <div className="form_message">
                  <div className="card success">
                    <span>{mailer.successMessage}</span>
                  </div>
                </div>
              </Fade>
              <Fade duration={600} collapse when={!!isError}>
                <div className="form_message">
                  <div className="card error">
                    <span>{mailer.errorMessage}</span>
                  </div>
                </div>
              </Fade>
              <Formik
                validationSchema={form.validationSchema}
                onSubmit={onSubmit}
                hasSuccessStatus={isSuccess}
                hasErrorStatus={isError}
                initialValues={form.fields.reduce(
                  (acc, field) => ({
                    ...acc,
                    [field.name]: field.initialValue,
                  }),
                  {}
                )}
              >
                <Form>
                  <Fade cascade bottom duration={600}>
                    <div>
                      {form.fields.map(field => (
                        <Input key={field.name} {...field} />
                      ))}
                      <Submit type="submit">{mailer.sendButtonText}</Submit>
                    </div>
                  </Fade>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </GetStartedWrapper>
  )
}

export default GetStartedContainer
