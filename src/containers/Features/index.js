import React from "react"
import Fade from "react-reveal/Fade"
import { FeaturesWrapper } from "./styled.components"
import { StaticImage } from "gatsby-plugin-image"
import Title from "../../components/Title"

const FeaturesContainer = props => {
  return (
    <FeaturesWrapper {...props}>
      <Title title="What We Offer" subtitle="Insight about our process" />

      <div className="container">
        <div className="slider">
          <div className="title">
            <Fade bottom cascade duration={600}>
              <span>
                <h2 className="section_title">
                  Start finding content based on
                </h2>
                <h2 className="accent">
                  <span>Your Peers</span>
                </h2>
              </span>
            </Fade>
          </div>
          <div className="image">
            <Fade bottom cascade duration={600}>
              <StaticImage
                src="../../images/mockup.png"
                quality={95}
                layout="constrained"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="laptop"
              />
            </Fade>
          </div>
        </div>
      </div>
    </FeaturesWrapper>
  )
}

export default FeaturesContainer
