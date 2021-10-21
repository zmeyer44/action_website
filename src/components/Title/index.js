import React from "react"
import Fade from "react-reveal/Fade"
import { TitleWrapper } from "./styled.components"

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <div className="title_block">
        <div className="border_section">
          <Fade bottom cascade duration={600}>
            <span>
              <h1>{title}</h1>
            </span>
            <span>
              <span>{subtitle}</span>
            </span>
          </Fade>
        </div>
      </div>
    </TitleWrapper>
  )
}

export default Title
