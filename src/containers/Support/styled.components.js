import styled from "styled-components"

export const SupportWrapper = styled.div`
  padding-bottom: 30px;
  padding-top: 30px;

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

      .faq {
        -webkit-box-flex: 0;
        flex-grow: 0;
        flex-shrink: 0;
        max-width: 544px;
        width: 100%;

        .accordion {
          background-color: rgb(219, 234, 240);
          cursor: pointer;

          .card_container {
            display: flex;

            .plus_minus {
              position: relative;
              min-width: 18px;
              width: 18px;
              height: 18px;
              font-size: 24px;
              line-height: 1;
              margin-right: 16px;
              margin-top: 4px;

              &:before,
              &:after {
                content: "";
                position: absolute;
                background-color: ${props => props.theme.colors.primary};
                transition: transform 0.25s ease-out;
              }

              /* Vertical line */
              &:before {
                top: 0;
                left: 50%;
                width: 2px;
                height: 100%;
                margin-left: -1px;
                border-radius: 1px;
              }

              /* horizontal line */
              &:after {
                top: 50%;
                left: 0;
                width: 100%;
                height: 2px;
                margin-top: -1px;
                border-radius: 1px;
              }

              &.true {
                cursor: pointer;

                &:before {
                  transform: rotate(90deg);
                }
                &:after {
                  transform: rotate(180deg);
                }
              }
            }

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
              display: inline;
            }

            p.answer {
              padding: 16px 16px 0px 0px;
              margin: 0px;
              font-style: inherit;
              font-variant: inherit;
              font-stretch: inherit;
              font-family: "Circular", sans-serif;
              font-size: 17px;
              font-weight: 400;
              line-height: 1.6;
              color: ${props => props.theme.colors.shades.primary[3]};
              max-width: 75vw;
              display: inherit;
              .accent_email {
                color: ${props => props.theme.colors.primary};
                text-decoration: underline;
              }
            }
          }
        }
      }
      .form {
        -webkit-box-flex: 0;
        flex-grow: 0;
        flex-shrink: 0;
        margin-top: 48px;
        max-width: 448px;
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
    padding-top: 100px;
    padding-bottom: 100px;

    .container {
      width: 720px;
      .title_section {
        margin-bottom: 100px;
      }
      .main_section {
        /* REMOVE LATER */
        /* align-items: center; */

        .faq {
          ul {
            margin-top: 48px;
          }
          .accordion {
            padding-left: 16px;
            padding-right: 32px;
          }
        }
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
        flex-direction: row;

        .form {
          margin-top: 0px;
        }
      }
    }
  }
`
