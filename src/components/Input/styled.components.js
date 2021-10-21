import React from "react"
import styled from "styled-components"
import ErrorIcon from "../../icons/ExclamationCircle"
// import this to render static markup
import { renderToStaticMarkup } from "react-dom/server"
// convert component to string useable in data-uri
const svgString = encodeURIComponent(
  renderToStaticMarkup(<ErrorIcon fill={props => props.theme.colors.error} />)
)

export const Wrapper = styled.div`
  .ReactCollapse--collapse {
    transition: height 200ms ease-in-out;
  }

  .ReactCollapse--content {
    opacity: 0;
    transition: opacity 200ms ease-in-out 100ms;
  }
  margin-top: 24px;

  &.error .ReactCollapse--content {
    opacity: 1;
  }
  border-color: rgb(219, 234, 240);
  &.success {
    border-color: ${props => props.theme.colors.success};
  }
  &.error {
    border-color: ${props => props.theme.colors.error};
  }

  &:first-of-type {
    margin-top: 0;
  }
  &.half {
    margin-top: 0;
    width: 47%;
    display: inline-block;
    &:first-of-type {
      margin-right: 6%;
    }
  }
`
export const Label = styled.label`
  font-size: 14px;
  line-height: 1.7;
  font-weight: 600;
  color: ${props => props.theme.colors.gray[0]};
  display: block;
  margin-bottom: 8px;
`
export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: stretch;
  align-items: stretch;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border: 2px solid;
  border-color: inherit;
  border-radius: 8px;
  transition: all 0.2s ease-in-out 0s;
`
export const StyledInput = styled.input`
  position: relative;
  display: block;
  width: 100%;
  min-height: 52px;
  padding: 10px 18px;
  font-family: "Circular", sans-serif;
  font-size: 17px;
  line-height: 1.6;
  color: ${props => props.theme.colors.gray[1]};
  background: none;
  border: none;
  transition: all 0.2s ease-in-out 0s;
  appearance: none;
  outline: none !important;
`
export const ErrorMessage = styled.span`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 8px;
  font-family: "Circular", sans-serif;
  font-size: 14px;
  color: ${props => props.theme.colors.error};

  &::before {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 8px;
    content: "";
    color: ${props => props.theme.colors.error};
    background-image: url("data:image/svg+xml,${svgString}");
  }
`
export const StyledTextarea = StyledInput.withComponent("textarea")
