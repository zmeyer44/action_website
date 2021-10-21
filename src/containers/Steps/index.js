import React from "react"
import Fade from "react-reveal/Fade"
import { StaticImage } from "gatsby-plugin-image"
import { StepsWrapper } from "./styled.components"

const steps = {
  title: "Here is how it works",
  text: "Discovr adds a layer of social proof to the digital and physical worlds.",
  steps: [
    

    {
      title: "Easy Tracking",
      icon: (
        <StaticImage
          src="../../images/icons/focus.png"
          width={100}
          quality={30}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="focus"
        />
      ),
    },
    {
      title: "Personalized Feed",
      icon: (
        <StaticImage
          src="../../images/icons/monitor.png"
          width={100}
          quality={30}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Development"
        />
      ),
    },
    {
      title: "Search & Discovery",
      icon: (
        <StaticImage
          src="../../images/icons/search.png"
          width={100}
          quality={30}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Search"
        />
      ),
    },
  ],
}

const StepsContainer = props => {
  return (
    <StepsWrapper {...props}>
      <div className="container">
        <div className="steps_section">
          <div className="title">
            <Fade bottom cascade duration={600}>
              <span>
                <h2 className="section_title">{steps.title}</h2>
              </span>
              <span>
                <p>{steps.text}</p>
              </span>
            </Fade>
          </div>
          <div className="steps">
            <Fade bottom cascade duration={600}>
              {steps.steps.map(step => (
                <div className="step" key={step.title}>
                  {step.icon}
                  <h3>{step.title}</h3>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </StepsWrapper>
  )
}

export default StepsContainer
