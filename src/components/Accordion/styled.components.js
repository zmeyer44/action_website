import styled from "styled-components"

export const Wrapper = styled.ul`
  padding: 0;
  list-style: none;
  margin: 24px 0px 0px;

  li {
    button {
      p {
        padding: 0px;
        margin: 0px;
        font-style: inherit;
        font-variant: inherit;
        font-stretch: inherit;
        font-family: "Circular", sans-serif;
        color: ${props => props.theme.colors.gray[0]};
        font-size: 17px;
        font-weight: 600;
        line-height: 1.6;
      }
    }
  }
`
