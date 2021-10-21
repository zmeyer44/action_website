import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
import { Form, Formik } from "formik"
import { AuthFormWrapper, AuthActionsWrapper } from "./styled.components"
import Input from "../../components/Formik/Input"
import Submit from "../../components/Formik/Submit"
import { Link } from "gatsby"

const AuthFormContainer = ({ form }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#1273f8"
  }, [])
  return (
    <div className="">
      <h2 style={{ color: "#FFF" }}>{form.title}</h2>

      <AuthFormWrapper>
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
      </AuthFormWrapper>
      <AuthActionsWrapper>
        {form.authActions.map(action => (
          <Link to={`/${action.to}`} className="auth_action" key={action.text}>
            {action.text}
          </Link>
        ))}
      </AuthActionsWrapper>
    </div>
  )
}

export default AuthFormContainer
