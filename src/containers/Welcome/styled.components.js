import styled, { keyframes } from "styled-components"

export const WelcomeWrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: linear-gradient(180deg, rgba(244, 246, 250, 0) 0%, #f4f6fa 100%);
  margin-bottom: 0;
  height: 90vh;

  .container {
    position: relative;
    width: 100%;
    padding: 0px 16px;
    margin: 2em auto 0 auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;

    .hero_text {
      padding-bottom: 32px;
      position: relative;
      z-index: 2;

      @keyframes blink {
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      h1 {
        font-size: 2.7em;
        margin-bottom: 0.5em;
        color: ${props => props.theme.colors.primary};
        span {
          color: hsla(0, 0%, 0%, 0.8);
          padding-right: 0.3rem;

          /* border-right: 0.3rem solid hsla(0, 0%, 0%, 0.8); */
          &:after {
            content: "";
            position: absolute;
            height: calc(2.7em / 2.6);
            width: 0.1em;
            background-color: hsla(0, 0%, 0%, 0.8);
            margin-left: 3px;
          }
          &.true {
            &:after {
              animation: blink 1s infinite ease;
            }
          }
        }
      }

      .cta_btns {
        margin-top: 32px;
        a {
          padding: 12px 26px;
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    height: 110vh;
    .container {
      width: 720px;

      .hero_text {
        padding-top: 32px;
      }
      .cta_btns {
        a {
          padding: 14px 32px;
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    height: 90vh;

    .container {
      margin-top: 0;
      flex-direction: row;
      width: 1170px;
      .hero_text {
        max-width: 500px;
        overflow-x: visible;
        h1 {
          width: 530px;
          font-size: 3.3em;
        }
      }
    }
  }
`
export const ImagesWrapper = styled.div`
  pointer-events: none;
  user-select: none;
  align-self: stretch;
  flex: 1 1 0%;
  display: flex;
  justify-content: center;
  align-items: top;
  margin-top: 2em;
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    margin: 2em auto 0;
    width: 70vw;
    max-width: 600px;
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin-top: -20px;
    align-items: center;
  }
`
