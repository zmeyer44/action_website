/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import theme from "../theme"

import "./layout.css"

const LayoutMin = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main
        style={{
          height: "100vh",
          display: "flex",
          backgroundColor: "#0052FF",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </main>
    </ThemeProvider>
  )
}

LayoutMin.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutMin
