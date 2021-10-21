import React from "react"
import { FooterWrapper } from "./styled.components"
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <h1
          style={{
            color: `#1273f8`,
          }}
        >
          Discovr
        </h1>
        <p>
          © {new Date().getFullYear()}, Built by &nbsp;
          <a href="#">Discovr</a>
        </p>
      </div>
    </FooterWrapper>
  )
}

export default Footer
