import React, { useState, useEffect, useContext, useRef } from "react"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../../context/auth"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Fade from "react-reveal/Fade"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import Input from "../../components/Formik/Input"
import Submit from "../../components/Formik/Submit"
import Button from "../../components/Button"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { HiOutlineSearch, HiX, HiPlus } from "react-icons/hi"
import { FiPlusCircle } from "react-icons/fi"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import {
  ExploreWrapper,
  CollectionCardWrapper,
  UserCardWrapper,
  CreateModal,
} from "./styled.components"
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 540 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1,
  },
}
const responsivePartial = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 540 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1,
    paritialVisibilityGutter: 70,
  },
}
const responsiveUsers = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 540 },
    items: 3,
    paritialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
}

const loading = [
  {
    title: "loading",
    description: "Description of the content from the content site.",
    source: "Content Author",
  },
  {
    title: "loading",
    description: "Description of the content from the content site.",
    source: "Content Author",
  },
  {
    title: "loading",
    description: "Description of the content from the content site.",
    source: "Content Author",
  },
]
const discovrTopics = [
  {
    title: "Learn how to Edit Video",
    subtitle: "Topics to Discovr",
    image: require("../../images/video_editing.jpg").default,
  },
  {
    title: "Chaos in Afganistan",
    subtitle: "Topics to Discovr",
    image: require("../../images/war.jpeg").default,
  },
  {
    title: "Introduction to Blockchain",
    subtitle: "Topics to Discovr",
    image: require("../../images/blockchain.jpg").default,
  },
  {
    title: "Advancments in the World of Robotics",
    subtitle: "Topics to Discovr",
    image: require("../../images/robotics.png").default,
  },
]
const trendingPosts = [
  {
    title: "Fantasy Football",
    image: require("../../images/football.jpeg").default,
    count: 5,
  },
  {
    title: "Guide to Mechanical Keyboards",
    image: require("../../images/mechanicalkeyboards.jpg").default,
    count: 6,
  },
  {
    title: "The Current State of VR",
    image: require("../../images/vr.jpg").default,
    count: 10,
  },
  {
    title: "Can anyone Compeat with Tesla?",
    image: require("../../images/electriccars.jpg").default,
    count: 17,
  },
  {
    title: "Learn to Code in React",
    image: require("../../images/react.png").default,
    count: 9,
  },
  {
    title: "Blockchain Bootcamp",
    image: require("../../images/blockchain_bootcamp.png").default,
    count: 13,
  },
]
const PopularUsers = [
  {
    name: "Lex Fridman",
    image: require("../../images/lex.jpg").default,
  },
  {
    name: "Michael Malice",
    image: require("../../images/malice.jpg").default,
  },
  {
    name: "Andrew Huberman",
    image: require("../../images/huberman.png").default,
  },
  {
    name: "Sam Harris",
    image: require("../../images/harris.jpg").default,
  },
  {
    name: "Mark Cuban",
    image: require("../../images/cuban.jpg").default,
  },
]

const Explore = () => {
  const [feed, setFeed] = useState([])
  const [modal, setModal] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const { currentUser } = useContext(AuthContext)
  const [loading, setLoading] = useState(null)

  const [coverImage, setCoverImage] = useState(null)
  const coverRef = useRef()

  const form = {
    title: "New Collection",
    action: "Create",
    isSuccess,
    isError,
    onSubmit: e => console.log(e),
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
    }),
    // eslint-disable-next-line no-undef

    fields: [
      {
        name: "name",
        label: "Collection Name",
        placeholder: "ie. Learning Python",
        type: "text",
        initialValue: "",
      },
      {
        name: "description",
        label: "Add a description",
        placeholder: "ie. Get started building projects",
        type: "text",
        initialValue: "",
      },
      {
        name: "tags",
        label: "Add some tags",
        placeholder: "ie. #python",
        type: "text",
        initialValue: "",
      },
    ],
  }

  const toggleModal = () => {
    if (modal) {
      document.body.style.position = ""
      document.body.style.top = ""
      setModal("")
      setCoverImage(null)
    } else {
      document.body.style.position = "fixed"
      document.body.style.top = `0`
      setModal("active")
    }
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

  useEffect(() => {
    firebase
      .firestore()
      .collectionGroup("posts")
      .where("public", "==", true)
      .orderBy("timeStamp", "desc")
      .limit(10)
      .onSnapshot(querySnapshot => {
        var posts = []
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          posts.push({ path: doc.ref.path, ...doc.data() })
        })
        setFeed(posts)
      })
  }, [])

  return (
    <>
      <Seo title="App" />
      <ExploreWrapper>
        <div className="top_bar">
          <StaticImage
            src="../../images/Discovr-01.png"
            quality={25}
            layout="constrained"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Discovr"
            height={50}
          />
          <div className="icons">
            <HiOutlineSearch />
          </div>
        </div>

        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          arrows={false}
          infinite
          responsive={responsive}
          ssr
          autoPlay={true}
          autoPlaySpeed={5000}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="item"
        >
          {discovrTopics.map(topic => {
            return (
              <div
                className="card"
                style={{
                  background: `linear-gradient(
        0deg,
        rgb(16 12 13 / 41%) 40%,
        rgba(16, 12, 13, 0) 80%
      ), url(${topic.image}) center / cover no-repeat`,
                }}
              >
                <span>{topic.subtitle}</span>
                <h3>{topic.title}</h3>
              </div>
            )
          })}
        </Carousel>

        <div className="collection_group">
          <div className="top_section">
            <h3>Trending Collections</h3>
            <span>View all</span>
          </div>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            arrows={false}
            partialVisible={true}
            responsive={responsivePartial}
            ssr
            containerClass="carousel-container collections"
            dotListClass="custom-dot-list-style"
            itemClass="item"
          >
            {trendingPosts.map(card => {
              return (
                <CollectionCardWrapper>
                  <div className="image_section">
                    <div
                      className="image"
                      style={{ backgroundImage: `url(${card.image})` }}
                    />
                  </div>
                  <div className="text_section">
                    <div className="title">
                      <h4>
                        {card.title === "loading" ? (
                          <>
                            Loading{" "}
                            <div className="lds-ellipsis">
                              <div></div>
                              <div></div>
                              <div></div>
                              <div></div>
                            </div>
                          </>
                        ) : (
                          card.title
                        )}
                      </h4>
                    </div>
                    <span className="subtitle">{card.count} items</span>
                  </div>
                </CollectionCardWrapper>
              )
            })}
          </Carousel>
          <Button className="create_btn" fun onClick={toggleModal}>
            <span>Create a Collection</span> <FiPlusCircle />
          </Button>
        </div>
        <div className="collection_group">
          <div className="top_section">
            <h3>Popular Users</h3>
            <span>View all</span>
          </div>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            arrows={false}
            partialVisible={true}
            responsive={responsiveUsers}
            ssr
            containerClass="carousel-container collections"
            dotListClass="custom-dot-list-style"
            itemClass="item"
          >
            {PopularUsers.map(user => {
              return (
                <UserCardWrapper
                  style={{
                    background: `linear-gradient(
        0deg,
        rgb(16 12 13 / 41%) 40%,
        rgba(16, 12, 13, 0) 80%
      ), url(${user.image}) center / cover no-repeat`,
                  }}
                >
                  <div>
                    {/* <span>{topic.subtitle}</span> */}
                    <h3>{user.name}</h3>
                  </div>
                </UserCardWrapper>
              )
            })}
          </Carousel>
        </div>
        <CreateModal className={`${modal}`}>
          <div className="main">
            <HiX onClick={toggleModal} className="close_btn" />
            <h3>Create a Collection</h3>
            <div
              className="cover_image"
              onClick={() => coverRef.current.click()}
              style={
                coverImage && {
                  background: `url(${coverImage}) center / cover no-repeat`,
                }
              }
            >
              {!coverImage && (
                <>
                  <div className="icon">
                    {loading ? <AiOutlineLoading3Quarters /> : <HiPlus />}
                  </div>
                  <span>Upload Cover Image</span>
                </>
              )}
            </div>
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
            <input
              type="file"
              id="cover"
              name="cover"
              onChange={coverUpload}
              ref={coverRef}
              hidden
            />
          </div>
        </CreateModal>
      </ExploreWrapper>
    </>
  )
}

export default Explore
