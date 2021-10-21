import styled from "styled-components"

export const GetStartedWrapper = styled.div`
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
      flex-direction: column;
      -webkit-box-pack: justify;
      justify-content: space-between;
      display: flex;

      h4 {
        padding: 0px;
        margin: 0px;
        font-style: inherit;
        font-variant: inherit;
        font-stretch: inherit;
        color: inherit;
        font-family: "Circular", sans-serif;
        font-size: 22px;
        font-weight: 600;
        line-height: 1.5;
        letter-spacing: -0.028em;
      }

      .subtext {
        padding: 0px;
        margin: 0px;
        font-style: inherit;
        font-variant: inherit;
        font-stretch: inherit;
        font-family: "Circular", sans-serif;
        color: ${props => props.theme.colors.primary};
        font-size: 17px;
        font-weight: 600;
        line-height: 1.6;
      }
      .form {
        -webkit-box-flex: 0;
        flex-grow: 0;
        flex-shrink: 0;
        max-width: 600px;
        width: 100%;

        .form_section {
          margin-top: 24px;
          .form_message {
            padding-bottom: 16px;
          }
        }

        .message p {
          padding: 0px;
          margin: 0px;
          font-style: inherit;
          font-variant: inherit;
          font-stretch: inherit;
          color: inherit;
          font-family: "Circular", sans-serif;
          font-size: 17px;
          line-height: 1.6;
          font-weight: 600;
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    .container {
      width: 720px;
      .title_section {
        margin-bottom: 100px;
      }
      .main_section {
        align-items: center;
        justify-content: center;
        .form {
          .form_section {
            margin-top: 48px;
          }
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    .container {
      width: 1100px;

      .main_section {
        .form {
          margin-top: 0px;
        }
      }
    }
  }
`
