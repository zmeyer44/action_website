import styled from "styled-components"

export const FeedWrapper = styled.div`
  padding-bottom: 30px;
  .container {
    position: relative;
    width: 100%;
    padding: 0px 16px;
    margin: 0px auto;

    .card {
      position: relative;
      padding: 24px 32px;
      text-align: left;
      border: none;
      border-radius: 12px;
      background-color: ${props => props.theme.colors.accent};
      color: #ffffff;
      break-inside: avoid;
      outline: none !important;
    }

    .main_section {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 90vw;
      margin: 0 auto;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    .main_section {
      width: 80vw;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    .container {
      width: 720px;
      .title_section {
        margin-bottom: 100px;
      }
      .main_section {
        width: 70vw;
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    .container {
      width: 1100px;
      .main_section {
        width: 50vw;
      }
    }
  }
`
