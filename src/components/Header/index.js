import React, { useContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink, navigate } from "gatsby"
import { AuthContext } from "../../context/auth"
import firebase from "gatsby-plugin-firebase"
import { HamburgerCollapse } from "react-animated-burgers"
import useScrollListener from "../../hooks/useScrollListener"
import { Link } from "react-scroll"
import { NavWrapper, MobileMenu } from "./styled.components"

const Header = ({ siteTitle, opaque }) => {
  const { currentUser } = useContext(AuthContext)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [navClassList, setNavClassList] = useState([])
  const scroll = useScrollListener()

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  useEffect(() => {
    const _classList = []

    if (scroll.y > 10) _classList.push("shadow")

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push("nav-bar--hidden")

    setNavClassList(_classList)
  }, [scroll.y, scroll.lastY])

  useEffect(() => {
    if (mobileMenu) {
      document.querySelector("body").style.height = "100vh"
      document.querySelector("body").style.overflowY = "hidden"
    } else {
      document.querySelector("body").style.height = "auto"
      document.querySelector("body").style.overflowY = ""
    }
  }, [mobileMenu])

  const handleLogout = async () => {
    await firebase.auth().signOut()
    setMobileMenu(false)
    navigate("/")
  }
  return (
    <>
      <NavWrapper
        className={navClassList.join(" ")}
        style={opaque && { backgroundColor: "#FFF" }}
      >
        <div className="container">
          <GatsbyLink
            to="/"
            style={{
              textDecoration: `none`,
              marginBottom: 0,
            }}
          >
            <h1
              style={{
                color: `#1273f8`,
                marginBottom: 0,
              }}
            >
              Action App
            </h1>
          </GatsbyLink>
          <div className="links">
            <ul>
              <li>
                <Link
                  activeClass="active"
                  to="welcome"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="steps"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-87}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={800}
                  offset={-87}
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  activeClass="active"
                  to="support"
                  spy={true}
                  smooth={true}
                  duration={800}
                >
                  Support
                </Link>
              </li> */}
            </ul>
            <div className="action_btn">
              {!currentUser ? (
                <GatsbyLink to="/app">
                  <span>Sign In</span>
                </GatsbyLink>
              ) : (
                <Link to="#!" onClick={handleLogout}>
                  <span>Log Out</span>
                </Link>
              )}
            </div>
          </div>
          <HamburgerCollapse
            className="menu_btn"
            isActive={mobileMenu}
            toggleButton={toggleMenu}
            buttonWidth={24}
          />
        </div>
      </NavWrapper>
      <MobileMenu className={`${mobileMenu && "active"}`}>
        <div className="links">
          <ul>
            <li>
              <Link
                activeClass="active"
                to="welcome"
                spy={true}
                smooth={true}
                duration={800}
                delay={200}
                onClick={() => setMobileMenu(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="steps"
                spy={true}
                smooth={true}
                duration={800}
                delay={200}
                onClick={() => setMobileMenu(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={800}
                delay={200}
                onClick={() => setMobileMenu(false)}
              >
                About
              </Link>
            </li>
            {/* <li>
              <Link
                activeClass="active"
                to="support"
                spy={true}
                smooth={true}
                duration={800}
                delay={200}
                onClick={() => setMobileMenu(false)}
              >
                Support
              </Link>
            </li> */}
          </ul>
          <div className="action_btn" onClick={toggleMenu}>
            {!currentUser ? (
              <GatsbyLink to="/app">
                <span>Sign In</span>
              </GatsbyLink>
            ) : (
              <Link to="#!" onClick={handleLogout}>
                <span>Log Out</span>
              </Link>
            )}
          </div>
        </div>
      </MobileMenu>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
