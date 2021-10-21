/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { ParallaxProvider } from "react-scroll-parallax"
import { useStaticQuery, graphql } from "gatsby"
import theme from "../theme"
import Background from "./Background"

import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Background>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

          <main
            style={{
              marginTop: 87,
            }}
          >
            {children}
          </main>
          <Footer />
        </Background>
      </ParallaxProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
