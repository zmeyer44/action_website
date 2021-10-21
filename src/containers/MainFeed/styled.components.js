import styled from "styled-components"

export const MainFeedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`
export const MiddleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 65vw;
  }
`
