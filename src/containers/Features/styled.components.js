import styled from "styled-components"

export const FeaturesWrapper = styled.div`
  padding-bottom: 30px;
  padding-top: 30px;

  .container {
    position: relative;
    width: 100%;
    padding: 0px 16px;
    margin: 0px auto;

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

    .slider {
      display: flex;
      flex-direction: column;

      .title {
        flex: 1;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-top: 30px;
        h2 {
          display: inline-block;
          margin-bottom: 0.5em;
          margin-right: 0.5em;
        }

        .accent {
          /* background-color: ${props => props.theme.colors.primary}; */
          color: ${props => props.theme.colors.primary};
          /* padding: 0.3em; */
          white-space: nowrap;
          display: inline;

          span {
            border-left: 2px solid ${props => props.theme.colors.primary};
            padding-left: 0.3em;
          }
        }
      }
      .image {
        flex: 1;
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    padding-top: 50px;
    .image {
      margin-top: -30px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 100px;
    padding-bottom: 100px;

    .container {
      width: 720px;
      .slider {
        .title {
          margin-top: 0;
        }
        h2 {
          font-size: 32px;
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    .container {
      width: 1170px;

      .slider {
        flex-direction: row;

        .title {
          justify-content: center;
          margin-bottom: 2em;
          text-align: right;
          padding-right: 2em;

          h2 {
            font-size: 35px;
            margin-bottom: 0.3em;
          }
        }
      }
    }
  }
`
