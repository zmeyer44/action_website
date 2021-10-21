import styled from "styled-components"

export const ExamplesWrapper = styled.div`
  padding-bottom: 30px;
  padding-top: 50px;

  .container {
    position: relative;
    width: 100%;
    padding: 0px 16px;
    margin: 0px auto;

    .examples {
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 500px;
        h2 {
          font-size: 30px;
          display: inline-block;
          margin-bottom: 0.5em;
          margin-right: 0.5em;
        }
        p {
          margin: 0 auto;
          max-width: 90%;
        }
        .action_btn {
          margin: 2em 0;
        }
      }
      .bars {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        .bar {
          display: flex;
          height: 75px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
          align-items: center;
          justify-content: stretch;
          border-radius: 8px;
          padding: 0.5em 1em;
          transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
          width: 100%;
          max-width: 600px;
          margin-bottom: 1em;
          .gatsby-image-wrapper {
            margin-right: 2em;
          }
          h4 {
            margin-bottom: 0;
          }

          div.learnmore_btn {
            margin-left: auto;
            cursor: pointer;
            padding: 0.4em 0.6em;
            border-radius: 4px;
            color: ${props => props.theme.colors.primary};
            transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
            white-space: nowrap;

            &:hover {
              background-color: #e7f1ff;
            }
          }
          a {
            margin-left: auto;
            cursor: pointer;
            padding: 0.4em 0.6em;
            border-radius: 4px;
            color: ${props => props.theme.colors.primary};
            transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
            white-space: nowrap;

            &:hover {
              background-color: #e7f1ff;
            }
          }

          &:hover {
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 100px;
    padding-bottom: 100px;

    .container {
      width: 720px;
      .title {
        margin-bottom: 50px;
        .action_btn {
          margin: 1em 0 0;
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    .container {
      width: 1170px;

      .examples {
        flex-direction: row;

        .title {
          justify-content: center;
          margin-bottom: 2em;
          align-items: flex-start;
          text-align: unset;

          h2 {
            font-size: 34px;
            margin-bottom: 0.5em;
          }
          p {
            margin: 0;
          }
          .action_btn {
            margin: 1em 0;
          }
        }
      }
    }
  }
`
