import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { contactTicket } from "../../functions"
import { SupportWrapper } from "./styled.components"
import Accordion from "../../components/Accordion"
import Input from "../../components/Formik/Input"
import Submit from "../../components/Formik/Submit"
import Title from "../../components/Title"

const faq = {
  title: "Frequently asked questions",
  text: "Answers for most popular questions",
  options: [
    {
      title: "What is Discovr?",
      text: "Discovr is a social discovery platform designed to help you sort through all that is out there and find what you are truly looking for. We're making this experience social, so you can gain a glimpse into what your friends, influencers, and industry experts are doing, using, and consuming.",
    },
    {
      title: "How do I create an account?",
      text: 'We\'re busy building, so access to the product is quite limited for now. You can join our waitlist to reserve a spot on Discovr and get early access. Joining the waitlist is easy as 1-2-3. Step 1: Click one of the "Join the waitlist!" buttons above. Step 2: Enter your email.  Step 3: Share your unique referral link with friends, colleagues, and coworkers to move up the waitlist and get earlier access.',
    },
    {
      title: "Are all posts public?",
      text: "Nope! Users get to choose the whether ach upload to Discovr is Public or Private. Public posts are viewable to anyone and are posted to the social feed. Private posts are only viewable by you.",
    },
    {
      title: "What if I have more questions?",
      text: (
        <span>
          Have another question? Email us at{" "}
          <a href="mailto: help@joindiscovr.com" className="accent_email">
            help@joindiscovr.com
          </a>
        </span>
      ),
    },
  ],
}
const mailer = {
  title: "Got more questions?",
  text: "Send us a message",
  sendButtonText: "Send message",
  successMessage:
    "Thank you for sending a message. We will respond as soon as possible.",
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

const SupportContainer = props => {
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
    <SupportWrapper {...props}>
      <Title title="About" subtitle="Let us know if you have any questions" />

      <div className="container">
        <div className="main_section">
          <div className="faq">
            <Fade bottom cascade duration={600}>
              <span>
                <h4>{faq.title}</h4>
              </span>
              <span>
                <span className="subtext">{faq.text}</span>
              </span>
            </Fade>
            <Accordion
              options={faq.options}
              renderItem={({ option, key, onSelect, isSelected }) => (
                <Fade bottom duration={600} delay={key * 100}>
                  <div className="card accordion" onClick={onSelect}>
                    <div className="card_container">
                      <div className={`plus_minus ${isSelected}`} />
                      <div>
                        <p>{option.title}</p>
                        <Fade duration={600} collapse when={isSelected}>
                          <p className="answer">{option.text}</p>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </Fade>
              )}
            />
          </div>

          {/* <div className="form">
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
          
          



          </div> */}
        </div>
      </div>
    </SupportWrapper>
  )
}

export default SupportContainer
