import React, { useLayoutEffect, useMemo, useRef, useState } from "react"
import PropTypes from "prop-types"

import range from "lodash/range"
import debounce from "lodash/debounce"

import { useMeasure, useWindowScroll } from "react-use"

import { BackgroundWrapper } from "./styled.components"

import Triangle from "./Triangle"
import ParallaxInner from "./ParallaxInner"

const Background = ({ children }) => {
  const { y: scrollY } = useWindowScroll()
  const [ref, { width, height }] = useMeasure()
  const [trianglesCount, setTrianglesCount] = useState(0)
  const delayedUpdate = useRef(
    debounce(count => setTrianglesCount(count), 100)
  ).current

  useLayoutEffect(() => {
    delayedUpdate((width * height) / 450000)
  }, [delayedUpdate, width, height])

  const triangles = useMemo(() => {
    return range(trianglesCount).map(key => {
      const y = (Math.cos(key) + 1) * 200 + (key - 1) * 200
      const x = ((Math.sin(key) + 1) * 250 + (key - 1) * 200) % width
      const rotate =
        Math.sign(Math.sin(key)) * (((Math.sin(key) + 1) * 360) % 360)

      return <Triangle left={x} top={y} rotate={rotate} key={key} />
    })
  }, [trianglesCount, width])

  return (
    <>
      <ParallaxInner ref={ref}>{children}</ParallaxInner>
      <BackgroundWrapper
        style={{ transform: `translate3d(0, -${scrollY / 2}px, 0)` }}
      >
        {triangles}
      </BackgroundWrapper>
    </>
  )
}

Background.propTypes = {
  children: PropTypes.node,
}

export default Background
