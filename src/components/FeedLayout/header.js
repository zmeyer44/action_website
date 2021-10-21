import React from "react"
import { Link, navigate } from "gatsby"
import { FaHome, FaCog, FaUser, FaUserFriends, FaBell } from "react-icons/fa"
import { FiCompass, FiPlusCircle } from "react-icons/fi"
import {
  HiOutlineSearch,
  HiOutlineUserCircle,
  HiOutlineHome,
} from "react-icons/hi"
import { CgMenuGridR } from "react-icons/cg"
import { FiLogOut } from "react-icons/fi"
import firebase from "gatsby-plugin-firebase"
import { FeedHeaderWrapper } from "./styled.components"
import discovrLogo from "../../images/discovr_logo.png"
import defaultProfileImg from "../../images/default_profile.jpg"
import { useAuth } from "../../context/auth"

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return isCurrent ? { className: "active" } : {}
    }}
  />
)

const Header = () => {
  const { currentUser } = useAuth()
  const handleLogout = async () => {
    navigate("/app")
    await firebase.auth().signOut()
  }
  return (
    <FeedHeaderWrapper>
      <div className="search_bar">
        <Link to="/">
          <img src={discovrLogo} width={40} height={40} />
        </Link>
        <label>
          <div className="search_icon">
            <HiOutlineSearch />
          </div>
          <input type="search" placeholder="Search Discovr" />
        </label>
      </div>
      <div className="icons">
        <ul>
          <li>
            <NavLink to="/app/feed">
              <div>
                <HiOutlineHome />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/feed/explore">
              <div>
                <FiCompass />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/feed/post">
              <div>
                <FiPlusCircle />
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/feed/profile">
              <div>
                <HiOutlineUserCircle />
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="profile_info">
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
        <h4>
          {currentUser?.user?.firstName} {currentUser?.user?.lastName}
        </h4>
        <div className="btn">
          <CgMenuGridR />
        </div>
        <div className="btn">
          <FaBell />
        </div>
        <div className="btn" onClick={handleLogout}>
          <FiLogOut />
        </div>
      </div>
    </FeedHeaderWrapper>
  )
}

export default Header
