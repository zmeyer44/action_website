import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
import { Form, Formik } from "formik"
import {
  ModalFormWrapper,
  ModalSuccessFormWrapper,
  ModalActionsWrapper,
} from "./styled.components"
import Input from "../../components/Formik/Input"
import Submit from "../../components/Formik/Submit"
import { Link } from "gatsby"
import { FaCopy } from "react-icons/fa"

const ModalContainer = ({ form, modal, setModal, isSuccess, state }) => {
  useEffect(() => {
    if (modal) {
      document.body.style.overflowY = "hidden"
    } else {
      document.body.style.overflowY = "auto"
    }
  }, [modal])

  const copyFunction = () => {
    /* Get the text field */
    var copyText = document.getElementById("myInput")
    /* Select the text field */
    copyText.select()
    copyText.setSelectionRange(0, 99999) /* For mobile devices */
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value)
    /* Alert the copied text */
    alert("Referral Link Copied!")
  }
  return (
    <div
      className=""
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: modal ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 99,
        backgroundColor: "rgb(18 115 248 / 90%)",
      }}
    >
      {!isSuccess ? (
        <>
          <h2 style={{ color: "#FFF" }}>{form.title}</h2>

          <ModalFormWrapper>
            <Formik
              validationSchema={form.validationSchema}
              onSubmit={form.onSubmit}
              hasSuccessStatus={form.isSuccess}
              hasErrorStatus={form.isError}
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
                  <div className="form_items">
                    {form.fields.map(field => (
                      <Input
                        key={field.name}
                        style={{ ...field?.styles }}
                        {...field}
                      />
                    ))}
                    {form.isError && (
                      <div>
                        <p className="error">{form.isError}</p>
                      </div>
                    )}
                    {form?.isMessage && (
                      <div>
                        <p className="message">{form.isMessage}</p>
                      </div>
                    )}
                    <Submit type="submit">{form.action}</Submit>
                  </div>
                </Fade>
              </Form>
            </Formik>
          </ModalFormWrapper>
        </>
      ) : (
        <>
          <h2 style={{ color: "#FFF" }}>Success!</h2>
          <ModalSuccessFormWrapper>
            <h3>You are currently in spot</h3>
            <div className="numbers">
              <h1>{state?.priority_number}</h1>
              <h3>of</h3>
              <h2>{state?.total_users}</h2>
            </div>

            <h5>Share with friends to move up!</h5>

            <div className="copy">
              <input
                type="text"
                disabled
                value={state?.ref_link}
                id="myInput"
              />

              <button onClick={copyFunction}>
                <FaCopy />
              </button>
            </div>
          </ModalSuccessFormWrapper>
          <ModalActionsWrapper>
            <span onClick={() => setModal(false)}>Return Home</span>
          </ModalActionsWrapper>
        </>
      )}
    </div>
  )
}

export default ModalContainer
