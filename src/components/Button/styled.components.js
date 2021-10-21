import styled from "styled-components"
import { Link } from "gatsby"

export const BtnWrapper = styled(Link)`
  position: relative;
  display: inline-block;
  margin: 0px;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: 2px solid ${props => props.theme.colors.primary};
  outline: 0px;
  font-family: "Circular", sans-serif;
  font-size: 17px;
  line-height: 1.6;
  font-weight: 600;
  padding: 14px 32px;
  white-space: nowrap;
  border-radius: 8px;
  transition: all 0.2s ease-in-out 0s;
  color: ${props => props.textColor};
  background-color: ${props => props.theme.colors.primary};

  :hover,
  :focus {
    border: 2px solid ${props => props.theme.colors.shades.primary[2]};
    background-color: ${props => props.theme.colors.shades.primary[2]};
  }
`
export const BtnWrapperFunction = styled.button`
  position: relative;
  display: inline-block;
  margin: 0px;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: 2px solid ${props => props.theme.colors.primary};
  outline: 0px;
  font-family: "Circular", sans-serif;
  font-size: 17px;
  line-height: 1.6;
  font-weight: 600;
  padding: 14px 32px;
  white-space: nowrap;
  border-radius: 8px;
  transition: all 0.2s ease-in-out 0s;
  color: ${props => props.textColor};
  background-color: ${props => props.theme.colors.primary};

  :hover,
  :focus {
    border: 2px solid ${props => props.theme.colors.shades.primary[2]};
    background-color: ${props => props.theme.colors.shades.primary[2]};
  }
`
export const BtnWrapperAlt = styled(Link)`
  position: relative;
  display: inline-block;
  margin: 0px;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: 2px solid ${props => props.theme.colors.primary};
  outline: 0px;
  font-family: "Circular", sans-serif;
  font-size: 17px;
  line-height: 1.6;
  font-weight: 600;
  padding: 14px 32px;
  white-space: nowrap;
  border-radius: 8px;
  transition: 0.3s cubic-bezier(0.1, 0, 0.1, 1);
  color: ${props => props.theme.colors.gray[0]};
  background-color: transparent;

  :hover,
  :focus {
    box-shadow: inset 18rem 0 0 0 ${props => props.theme.colors.primary};
    color: #fff;
    background-color: #fff;
  }
`
export const BtnWrapperFunctionAlt = styled.button`
  position: relative;
  display: inline-block;
  margin: 0px;
  font-style: inherit;
  font-variant: inherit;
  font-stretch: inherit;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  border: 2px solid ${props => props.theme.colors.primary};
  outline: 0px;
  font-family: "Circular", sans-serif;
  font-size: 17px;
  line-height: 1.6;
  font-weight: 600;
  padding: 14px 32px;
  white-space: nowrap;
  border-radius: 8px;
  transition: 0.3s cubic-bezier(0.1, 0, 0.1, 1);
  color: ${props => props.theme.colors.gray[0]};
  background-color: transparent;

  :hover,
  :focus {
    box-shadow: inset 18rem 0 0 0 ${props => props.theme.colors.primary};
    color: #fff;
    background-color: #fff;
  }
`
