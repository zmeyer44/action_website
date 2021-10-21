import styled from "styled-components"

export const TitleWrapper = styled.div`
  max-width: 100vw;
  margin-bottom: 30px;
  display: flex;
  .title_block {
    background-color: ${props => props.theme.colors.primary};
    width: auto;
    padding: 1em;
    color: ${props => props.theme.colors.white};

    .border_section {
      border-left: 2px solid ${props => props.theme.colors.white};
      padding-left: 1em;
    }

    h1 {
      margin-bottom: 0.2em;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 100px;
  }
`
