import React from "react"
import styled from "styled-components"

import { useFormikContext } from "formik"

const FormikSubmit = props => {
  const { isSubmitting } = useFormikContext()

  return (
    <BtnWrapper
      {...props}
      disabled={isSubmitting}
      style={{ marginTop: 24 }}
    ></BtnWrapper>
  )
}

export const BtnWrapper = styled.button`
  position: relative;
  display: inline-block;
  margin: 0px;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: none;
  outline: 0px;
  font-family: "Circular", sans-serif;
  letter-spacing: -0.028em;
  font-size: 17px;
  line-height: 1.6;
  font-weight: 600;
  padding: 14px 32px;
  white-space: nowrap;
  border-radius: 8px;
  transition: all 0.2s ease-in-out 0s;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.shades.secondary[1]};
  }

  :disabled,
  [disabled] {
    background-color: ${props => props.theme.colors.gray[5]};
    opacity: 70%;
    pointer-events: none;
  }
`

export default FormikSubmit
