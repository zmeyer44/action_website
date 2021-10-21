import React from "react"
import { FeedWrapper } from "./styled.components"
import Title from "../../components/Title"
import Card from "../../components/Card"

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
const FeedContainer = ({ feed }) => {
  return (
    <FeedWrapper>
      <Title title="Your Feed" subtitle="Here's what people have been doing" />

      <div className="container">
        <div className="main_section">
          {feed?.length
            ? feed.map(post => {
                return <Card {...post} key={post.timestamp} />
              })
            : loading.map((post, index) => {
                return <Card {...post} key={index} />
              })}
        </div>
      </div>
    </FeedWrapper>
  )
}

export default FeedContainer
