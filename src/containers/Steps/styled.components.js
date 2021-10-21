import styled from "styled-components"

export const StepsWrapper = styled.div`
  background-color: ${props => props.theme.colors.shades.primary[1]};
  padding-bottom: 30px;
  padding-top: 30px;

  .container {
    position: relative;
    width: 100%;
    padding: 0px 16px;
    margin: 0px auto;

    .steps_section {
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        color: ${props => props.theme.colors.white};
        margin: 1em 0 2em 0;
        h2 {
          color: inherit;
          font-size: 30px;
          display: inline-block;
          margin-bottom: 0.5em;
        }
        p {
          color: ${props => props.theme.colors.gray[5]};
        }
        a {
        }
      }
      .steps {
        display: flex;
        flex-direction: column;
        width: 90%;

        .step {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 2em;
          color: ${props => props.theme.colors.white};

          h3 {
            margin-bottom: 0;
            margin-top: 1em;
          }
          img {
            filter: invert(1);
          }
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    padding-top: 50px;
    padding-bottom: 50px;

    .container {
      width: 720px;
      .title {
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    .container {
      width: 1170px;

      .steps_section {
        .title {
          margin-bottom: 2em;

          h2 {
            font-size: 34px;
            margin-bottom: 0.3em;
          }
        }
        .steps {
          flex-direction: row;
          justify-content: space-evenly;
        }
      }
    }
  }
`
