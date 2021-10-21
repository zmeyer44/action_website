import React, { useState, useEffect, useContext } from "react"
import firebase from "gatsby-plugin-firebase"
import { AuthContext } from "../../context/auth"
import Layout from "../../components/FeedLayout"
import Seo from "../../components/seo"
import ProfileBox from "../../components/ProfileBox"
import PostBox from "../../components/PostBox"
import Post from "../../components/Post"
import { Router } from "@reach/router"
import { MainFeedWrapper, MiddleWrapper } from "./styled.components"

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

let Page1 = () => <div>Page1</div>
let Page2 = () => <div>Page2</div>
const MainFeed = () => {
  const [feed, setFeed] = useState([])
  const { currentUser } = useContext(AuthContext)

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
      <MainFeedWrapper>
        <ProfileBox currentUser={currentUser} />
        <MiddleWrapper>
          <PostBox currentUser={currentUser} />
          {feed?.length
            ? feed.map(post => {
                return <Post {...post} key={post.timestamp} />
              })
            : loading.map((post, index) => {
                return <Post {...post} key={index} />
              })}
        </MiddleWrapper>
      </MainFeedWrapper>
    </>
  )
}

export default MainFeed
