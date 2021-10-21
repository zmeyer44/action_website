import React from "react"
import styled, { keyframes } from "styled-components"
import { position } from "styled-system"

const rotate = start => keyframes`
  from {
    transform: rotate(${start}deg);
  }

  to {
    transform: rotate(${start + (start < 0 ? -360 : 360)}deg);
  }
`

const StyledSvg = styled.svg`
  position: absolute;
  color: ${props => props.theme.colors.gray[5]};
  ${position};
  animation: 10s ${props => rotate(props.rotate)} linear infinite;
`

const Triangle = props => {
  return (
    <StyledSvg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      translate={10}
    >
      <path
        d="M10.1244 3.85644C10.8942 2.52311 12.8187 2.52311 13.5885 3.85645L20.5167 15.8564C21.2865 17.1898 20.3243 18.8564 18.7846 18.8564H4.92824C3.38864 18.8564 2.42639 17.1898 3.19619 15.8564L10.1244 3.85644Z"
        stroke="currentColor"
        strokeWidth="4"
      />
    </StyledSvg>
  )
}

export default React.memo(Triangle)
