import React, { useState, useEffect } from "react"
import Fade from "react-reveal/Fade"
import { Parallax } from "react-scroll-parallax"
import { WelcomeWrapper, ImagesWrapper } from "./styled.components"
import { StaticImage } from "gatsby-plugin-image"

import Button from "../../components/Button"

const titleWords = [
  "Interviews",
  "Podcasts",
  "Articles",
  "Recipes",
  "Tutorials",
  "Deep dives",
]

const WelcomeContainer = props => {
  const [displayText, setDisplayText] = useState("")
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    setTimeout(() => typewriter(), 600)
  }, [])

  var index = 0
  var isDeleting = false
  const wait = 3000
  var txt = ""
  const typewriter = () => {
    let typeSpeed = 300
    const current = index % titleWords.length
    const fullWord = titleWords[current]

    if (isDeleting) {
      typeSpeed /= 2
      //remove char
      txt = fullWord.substring(0, txt.length - 1)
    } else {
      //add char
      txt = fullWord.substring(0, txt.length + 1)
    }
    if (!isDeleting && txt === fullWord) {
      typeSpeed = wait
      setIsPaused(true)
      isDeleting = true
    } else if (isDeleting && txt === "") {
      index++
      isDeleting = false
      typeSpeed = 300
    }

    setDisplayText(txt)
    if (isPaused) {
      setIsPaused(false)
    }
    setTimeout(() => typewriter(), typeSpeed)
  }

  return (
    <WelcomeWrapper {...props}>
      <div className="container">
        <div className="hero_text">
          <Fade bottom cascade duration={600}>
            <span>
              <h1>
                Community-driven, crowdsourced curation for <br />
                <span className={`${isPaused}`}>{displayText}</span>
              </h1>
            </span>
            <span>
              <span>
                Whereas most search and discovery are based on algorithms and
                ads, we base it on who you follow on Discovr.
              </span>
            </span>
            <div className="cta_btns">
              <Button fun onClick={() => props.setModal(true)}>
                Join the Waitlist!
              </Button>
              {/* <Button
                href="https://chrome.google.com/webstore/detail/discovr/lfjeobbopnlcadicflafdepdkkflmkhc?hl=en"
                target="_blank"
              >
                Add to Chrome
              </Button>
              <Button alt style={{ marginLeft: 16 }} to="/app/feed">
                Your Feed
              </Button> */}
            </div>
          </Fade>
        </div>
        <ImagesWrapper>
          <Parallax y={["-20%", "20%"]}>
            <StaticImage
              src="../../images/hero.png"
              quality={95}
              layout="constrained"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Web pages"
            />
          </Parallax>
        </ImagesWrapper>
      </div>
    </WelcomeWrapper>
  )
}

export default WelcomeContainer
