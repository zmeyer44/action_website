import React, { useContext } from "react"
import { AuthContext } from "../../context/auth"
import { CardWrapper } from "./styled.components"
import { FaRegHeart, FaHeart } from "react-icons/fa"
import { like, unlike } from "../../functions"
const Card = ({
  children,
  image,
  title,
  description,
  source,
  url,
  likes,
  path,
  ...props
}) => {
  const { currentUser } = useContext(AuthContext)
  const toggleLike = () => {
    if (likes?.includes(currentUser.uid)) {
      return unlike(path, currentUser.uid)
    } else {
      return like(path, currentUser.uid)
    }
  }
  return (
    <CardWrapper {...props}>
      <div className="image_section">
        <div className="image" style={{ backgroundImage: `url(${image})` }} />
        <button onClick={toggleLike}>
          {likes?.includes(currentUser.uid) ? (
            <FaHeart className="unlike_btn" />
          ) : (
            <FaRegHeart className="like_btn" />
          )}
        </button>
      </div>
      <a href={url} target="_blank">
        <div className="text_section">
          <div className="title">
            <h4>
              {title === "loading" ? (
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
                title
              )}
            </h4>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <span className="source">{source}</span>
        </div>
      </a>
    </CardWrapper>
  )
}

export default Card
