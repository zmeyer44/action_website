import React from "react"

import Card from "../Card"
import defaultProfileImg from "../../images/default_profile.jpg"
import { PostWrapper } from "./styled.components"
import { FaRegHeart, FaHeart } from "react-icons/fa"

const Post = props => {
  function timeDifference(previous) {
    var current = Date.now()
    var msPerMinute = 60 * 1000
    var msPerHour = msPerMinute * 60
    var msPerDay = msPerHour * 24
    var msPerYear = msPerDay * 365

    var elapsed = current - previous

    if (!elapsed) {
      return ""
    } else if (elapsed < 6000) {
      return "Just now"
    } else if (elapsed < msPerMinute) {
      return Math.round(elapsed / 1000) + " seconds ago"
    } else if (elapsed < msPerMinute * 2) {
      return "1 minute ago"
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + " minutes ago"
    } else if (elapsed < msPerHour * 2) {
      return (
        "1 hour " + Math.round(elapsed / (msPerMinute * 2)) + " minutes ago"
      )
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + " hours ago"
    } else if (elapsed < msPerDay * 2) {
      return "1 day ago"
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerDay) + " days ago"
    } else if (elapsed < msPerYear * 2) {
      return "1 year ago"
    } else {
      return Math.round(elapsed / msPerYear) + " years ago"
    }
  }

  return (
    <PostWrapper>
      <div className="top_section">
        <div className="profile_image_container">
          <div
            className="profile_image"
            style={
              props.postAuthor?.profileImage
                ? {
                    backgroundImage: `url(${props.postAuthor?.profileImage})`,
                  }
                : { backgroundImage: `url(${defaultProfileImg})` }
            }
          />
        </div>
        <div className="profile_info">
          <h2>{props.postAuthor?.name}</h2>
          <span>{timeDifference(props?.timeStamp)}</span>
        </div>
      </div>
      <Card {...props} className="post_card" />
      <div className="post_info">
        <span>
          <FaRegHeart /> &nbsp; {!!props.likes?.length && props.likes?.length}
        </span>
      </div>
    </PostWrapper>
  )
}

export default Post
