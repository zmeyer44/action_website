import React, { useState, useRef, useContext, useEffect } from "react"

import { ImageFormWrapper } from "./styled.components"
import defaultProfileImg from "../../images/default_profile.jpg"

import Button from "../../components/Button"
import firebase from "gatsby-plugin-firebase"
import { AiOutlineCamera } from "react-icons/ai"
import { AuthContext } from "../../context/auth"
import { navigate } from "gatsby"
import { uploadImages } from "../../functions"

const ImageFormContainer = () => {
  const { currentUser, setUser } = useContext(AuthContext)
  const [isSuccess, setIsSuccess] = useState(false)
  const [loading, setLoading] = useState(null)
  const [submitting, setSubmitting] = useState(false)
  const [profileImage, setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const profileRef = useRef()
  const coverRef = useRef()

  function getUserInfo(user) {
    return firebase.firestore().collection("users").doc(user.uid).get()
  }
  const onSubmit = () => {
    setSubmitting(true)
    return uploadImages(profileImage, coverImage, currentUser).then(r => {
      if (r.error) {
        console.error(r.error)
      } else {
        console.log(r)
        getUserInfo(currentUser).then(e => {
          setUser({ ...currentUser, user: e.data() })
          setIsSuccess(true)
        })
      }
    })
  }

  useEffect(() => {
    if (isSuccess) {
      console.log(currentUser)
      navigate("/app/feed")
    }
  }, [isSuccess])

  const profileUpload = async e => {
    setLoading(true)
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(`images/${currentUser.uid}_${file.name}`)
    await fileRef.put(file)
    setProfileImage(await fileRef.getDownloadURL())
    setLoading(false)
  }
  const coverUpload = async e => {
    setLoading(true)
    const file = e.target.files[0]
    const storageRef = firebase.storage().ref()
    const fileRef = storageRef.child(`images/${currentUser.uid}_${file.name}`)
    await fileRef.put(file)
    setCoverImage(await fileRef.getDownloadURL())
    setLoading(false)
  }

  return (
    <div className="">
      <h2 style={{ color: "#FFF" }}>
        {loading ? "Uploading..." : "Complete Profile"}
      </h2>
      <ImageFormWrapper>
        <div
          className="cover_section"
          onClick={() => coverRef.current.click()}
          style={
            coverImage && {
              background: `url(${coverImage}) center / cover no-repeat`,
            }
          }
        >
          <AiOutlineCamera />
        </div>
        <div className="info_section">
          <div
            className="profile_image"
            style={
              profileImage
                ? {
                    background: `url(${profileImage}) center / cover no-repeat`,
                  }
                : {
                    background: `url(${defaultProfileImg}) center / cover no-repeat`,
                  }
            }
            onClick={() => profileRef.current.click()}
          >
            <AiOutlineCamera />
          </div>
          <h2>
            {currentUser?.user?.firstName}
            &nbsp;{currentUser?.user?.lastName}
          </h2>
        </div>

        <Button
          fun
          style={{ textAlign: "center", padding: 7 }}
          onClick={onSubmit}
        >
          {submitting ? "Loading..." : !profileImage ? "Skip" : "Complete"}
        </Button>
      </ImageFormWrapper>
      <input
        type="file"
        name="profile"
        id="profile"
        onChange={profileUpload}
        ref={profileRef}
        hidden
      />
      <input
        type="file"
        id="cover"
        name="cover"
        onChange={coverUpload}
        ref={coverRef}
        hidden
      />
    </div>
  )
}

export default ImageFormContainer
