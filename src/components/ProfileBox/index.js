import React from "react"

import { ProfileBoxWrapper } from "./styled.components"
import defaultCoverImg from "../../images/default_cover.jpg"
import defaultProfileImg from "../../images/default_profile.jpg"
import { FaLayerGroup } from "react-icons/fa"
import { HiUserGroup } from "react-icons/hi"
import { FiActivity } from "react-icons/fi"
const ProfileBox = ({ currentUser }) => {
  return (
    <ProfileBoxWrapper>
      <div
        className="cover_section"
        style={
          currentUser.user?.coverImage
            ? { backgroundImage: `url(${currentUser.user?.coverImage})` }
            : { backgroundImage: `url(${defaultCoverImg})` }
        }
      />
      <div className="info_section">
        <div
          className="profile_image"
          style={
            currentUser.user?.profileImage
              ? { backgroundImage: `url(${currentUser.user?.profileImage})` }
              : { backgroundImage: `url(${defaultProfileImg})` }
          }
        ></div>
        <h2>
          {currentUser.user.firstName} {currentUser.user.lastName}
        </h2>
        <div className="bottom_section">
          <div className="option">
            <FaLayerGroup />
            <span>My Stack</span>
          </div>
          <div className="option">
            <HiUserGroup />
            <span>Groups</span>
          </div>
          <div className="option">
            <FiActivity />
            <span>Activity</span>
          </div>
        </div>
      </div>
    </ProfileBoxWrapper>
  )
}

export default ProfileBox
