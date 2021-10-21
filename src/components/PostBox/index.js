import React, { useState, useEffect } from "react"
import { Formik, Form, useField, useFormikContext } from "formik"
import * as Yup from "yup"

import Input from "../Input"
import Submit from "../Formik/Submit"
import { PostBoxWrapper, ShareWrapper } from "./styled.components"
import defaultProfileImg from "../../images/default_profile.jpg"
import { newPost } from "../../functions"
import Card from "../Card"

const PostBox = ({ currentUser }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [currentUrl, setCurrentUrl] = useState("")
  const [data, setData] = useState(null)
  const [cardProps, setCardProps] = useState(null)
  const [share, setShare] = useState(true)
  const [btnText, setBtnText] = useState("Share")

  function encode(url) {
    return encodeURIComponent(url).replace(/'/g, "%27").replace(/"/g, "%22")
  }

  function createCard() {
    const encodedUrl = encode(currentUrl)
    fetch(
      `https://opengraph.io/api/1.1/site/${encodedUrl}?app_id=a243d5b6-0d83-406b-acd3-c9c8b771fb30`
    )
      .then(response => response.json())
      .then(data => setData(data))
      .then(newData => console.log(newData))
      .catch(e => console.error("Create Card Error: ", e))
    return
  }

  useEffect(() => {
    if (data) {
      setCardProps({
        image: data?.openGraph?.image?.url || "",
        title: data?.openGraph?.title || "",
        description: data?.openGraph?.description || "",
        source: data?.openGraph?.site_name || "",
        type: data?.openGraph?.type,
      })
    }
  }, [data])

  const onSubmit = async () => {
    if (!cardProps) {
      return
    }
    setIsSuccess(false)
    setIsError(false)
    setIsSubmitting(true)

    try {
      const result = await newPost(cardProps, share, currentUrl, currentUser)

      if (result.error) {
        setIsError(result.error.message)
      } else {
        setIsSuccess(true)
        setCardProps(null)
        setData(null)
      }
    } catch (_) {
      console.error("Error writing document: ", _)
      setIsError(_.message)
    }
  }
  useEffect(() => {
    if (currentUrl) {
      return createCard()
    }
  }, [currentUrl])

  const FormikInput = props => {
    const [field, meta] = useField(props)
    const { resetForm } = useFormikContext()

    useEffect(() => {
      let error = meta.touched && meta.error
      let touched = meta.touched

      if (!error && touched) {
        setCurrentUrl(meta.value)
      }
    }, [meta])
    useEffect(() => {
      if (isSuccess && isSubmitting) {
        setIsSubmitting(false)
        resetForm()
      }
    }, [isSuccess])

    return (
      <Input
        {...props}
        {...field}
        touched={meta.touched}
        error={meta.touched && meta.error}
      />
    )
  }

  const form = {
    onSubmit,
    validationSchema: Yup.object({
      url: Yup.string().url("Must be a url").required("Required"),
    }),
  }
  return (
    <PostBoxWrapper>
      <div className="search_section">
        <Formik
          validationSchema={form.validationSchema}
          onSubmit={onSubmit}
          hasSuccessStatus={isSuccess}
          hasErrorStatus={isError}
          initialValues={{ url: "" }}
        >
          <Form>
            <div className="form_row">
              <div className="profile">
                <div
                  className="profile_image"
                  style={
                    currentUser.user?.profileImage
                      ? {
                          backgroundImage: `url(${currentUser.user?.profileImage})`,
                        }
                      : { backgroundImage: `url(${defaultProfileImg})` }
                  }
                />
              </div>
              <FormikInput
                name="url"
                type="url"
                key="url"
                placeholder="i.e. https://www.example.com/"
              />
            </div>
            {cardProps && (
              <div className="card_section">
                <Card {...cardProps} />
              </div>
            )}

            <div className="form_row bottom">
              <ShareWrapper>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={share}
                    onClick={() => setShare(!share)}
                  />
                  <span>
                    <em></em>
                    <strong></strong>
                  </span>
                </label>
              </ShareWrapper>
              <Submit type="submit">{share ? "Share" : "Save"}</Submit>
            </div>
          </Form>
        </Formik>
      </div>
    </PostBoxWrapper>
  )
}

export default PostBox
