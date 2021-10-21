import React from "react"
import { SchoolsWrapper } from "./styled.components"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  largeDesktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 1300, min: 1100 },
    items: 6,
  },
  smallDesktop: {
    breakpoint: { max: 1100, min: 750 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 750, min: 550 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 2,
  },
}

const Schools = () => {
  return (
    <SchoolsWrapper>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={false}
        responsive={responsive}
        partialVisbile
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={[
          "largeDesktop",
          "smallDesktop",
          "desktop",
          "tablet",
          "mobile",
        ]}
        autoPlay
      >
        <div className="school">
          <StaticImage
            src="../../images/logos/thewashingtonpost.png"
            layout="fixed"
            width={150}
            quality={30}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="thewashingtonpost"
            style={{}}
          />
        </div>
        <div className="school">
          <StaticImage
            src="../../images/logos/youtube.png"
            layout="fixed"
            width={150}
            quality={30}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="youtube"
            style={{}}
          />
        </div>
        <div className="school">
          <StaticImage
            src="../../images/logos/businessinsider.png"
            layout="fixed"
            width={150}
            quality={30}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="business insider"
            style={{}}
          />
        </div>
        <div className="school">
          <StaticImage
            src="../../images/logos/abc.png"
            layout="fixed"
            width={150}
            quality={30}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="abc"
            style={{}}
          />
        </div>
        <div className="school">
          <StaticImage
            src="../../images/logos/newyorktimes.png"
            layout="fixed"
            width={150}
            quality={30}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="nytimes"
            style={{}}
          />
        </div>
        <div className="school">
          <StaticImage
            src="../../images/logos/forbes.png"
            layout="fixed"
            width={150}
            quality={30}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="forbes"
            style={{}}
          />
        </div>
        <div className="school">
          <StaticImage
            src="../../images/logos/newyorkpost.png"
            layout="fixed"
            width={150}
            quality={30}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="new york post"
            style={{}}
          />
        </div>
      </Carousel>
    </SchoolsWrapper>
  )
}

export default Schools
