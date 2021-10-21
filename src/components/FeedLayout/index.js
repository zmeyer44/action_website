import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import theme from "../../theme"
import { FeedWrapper } from "./styled.components"
import FeedHeader from "./header"
import "../layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  useEffect(() => {
    document.body.style.backgroundColor = "#1273f8"
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <FeedWrapper>
        <FeedHeader siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div className="content">{children}</div>
      </FeedWrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
