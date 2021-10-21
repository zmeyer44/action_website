import styled, { css } from "styled-components"

export const NavWrapper = styled.header`
  background-color: rgba(255, 255, 255, 0.95);
  transition: ${props => props.theme.transition.all};
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 72px;
  margin: 0px auto;
  z-index: 99;

  .container {
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    position: relative;
    width: 100%;
    padding: 16px;
    margin: 0px auto;

    a {
      display: block;
      margin-left: auto;
      margin-right: auto;
      svg {
        color: hsla(0, 0%, 0%, 0.8);
      }
    }

    .links {
      -webkit-box-align: center;
      align-items: center;
      display: none;
      width: 100%;

      ul {
        padding: 0px;
        margin: 0px auto;
        list-style: none;
        -webkit-box-align: center;
        align-items: center;
        display: flex;
        flex-direction: column;

        li {
          padding: 0px;
          margin: 0px auto;
          list-style: none;
          -webkit-box-align: center;
          align-items: center;
          display: flex;
          flex-direction: column;

          a {
            display: block;
            font-size: 17px;
            line-height: 1.6;
            font-weight: 600;
            color: ${props => props.theme.colors.gray[0]};
            transition: all 0.2s ease-in-out 0s;
            margin: 16px 0px;
            cursor: pointer;

            &.active {
              color: ${props => props.theme.colors.primary};
            }
          }
        }
      }

      .action_btn {
        margin-left: 0px;
        margin-top: 8px;

        a {
          position: relative;
          display: inline-block;
          margin: 0px;
          font-style: inherit;
          font-variant: inherit;
          font-stretch: inherit;
          text-decoration: none;
          cursor: pointer;
          user-select: none;
          border: none;
          outline: 0px;
          font-family: "Work Sans", sans-serif;
          font-size: 17px;
          line-height: 1.6;
          font-weight: 600;
          padding: 14px 32px;
          white-space: nowrap;
          border-radius: 8px;
          transition: all 0.2s ease-in-out 0s;
          color: rgb(255, 255, 255);
          background-color: ${props => props.theme.colors.primary};
          box-shadow: rgb(24 102 180 / 16%) 0px 24px 48px;
        }
      }
    }

    .menu_btn {
      padding: 9px;
      display: inline-block;
      cursor: pointer;
      transition-property: opacity, filter;
      transition-duration: 0.15s;
      transition-timing-function: linear;
      font: inherit;
      color: inherit;
      text-transform: none;
      background-color: transparent;
      margin: 0px;
      border: none;
      overflow: visible;
      outline: none;
      color: ${props => props.theme.colors.gray[0]};
      position: absolute;
      right: 16px;
      z-index: 100;
    }

    @media (min-width: ${props => props.theme.breakpoints.md}) {
      width: 720px;
      a {
        margin-left: 0px;
        margin-right: 0px;
      }
    }
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      width: 1170px;
      .links {
        display: flex;

        ul {
          flex-direction: row;
          margin-right: 0px;

          li {
            a {
              margin: 0px 16px;
            }
          }
        }
        .action_btn {
          margin-top: 0px;
          margin-left: 16px;
        }
      }
      .menu_btn {
        display: none;
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.md}) {
    &.nav-bar--hidden {
      top: -77px;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    &.nav-bar--hidden {
      top: -72px;
    }
  }

  &.shadow {
    box-shadow: rgb(24 102 180 / 10%) 0px 24px 48px;
  }
`
export const MobileMenu = styled.div`
  display: flex;
  overflow: hidden;
  background-color: ${props => props.theme.colors.white};
  position: fixed;
  height: calc(100vh - 72px);
  top: 72px;
  z-index: 99;
  left: -100vw;
  bottom: 0;
  width: 100vw;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out 0s;

  .links {
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    margin-top: -36px;

    ul {
      padding: 0px;
      margin: 0px auto;
      list-style: none;
      -webkit-box-align: center;
      align-items: center;
      display: flex;
      flex-direction: column;

      li {
        padding: 0px;
        margin: 0px auto;
        list-style: none;
        -webkit-box-align: center;
        align-items: center;
        display: flex;
        flex-direction: column;

        a {
          display: block;
          font-size: 17px;
          line-height: 1.6;
          font-weight: 600;
          color: ${props => props.theme.colors.gray[0]};
          transition: all 0.2s ease-in-out 0s;
          margin: 16px 0px;
          cursor: pointer;

          &.active {
            color: ${props => props.theme.colors.primary};
          }
        }
      }
    }

    .action_btn {
      display: flex;
      justify-content: center;
      margin-top: 2em;

      a {
        position: relative;
        display: inline-block;
        margin: 0px;
        font-style: inherit;
        font-variant: inherit;
        font-stretch: inherit;
        text-decoration: none;
        cursor: pointer;
        user-select: none;
        border: none;
        outline: 0px;
        font-family: "Ciruclar", sans-serif;
        letter-spacing: -0.028em;
        font-size: 17px;
        line-height: 1.6;
        font-weight: 600;
        padding: 14px 32px;
        white-space: nowrap;
        border-radius: 8px;
        transition: all 0.2s ease-in-out 0s;
        color: rgb(255, 255, 255);
        background-color: ${props => props.theme.colors.primary};
        box-shadow: rgb(24 102 180 / 16%) 0px 24px 48px;
      }
    }
  }

  &.active {
    display: flex;
    right: 0;
    left: 0;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    &.active {
      display: none;
    }
  }
`
// @media (max-width: ${breakpoints.lg}) {
//       ${Card} {
//         animation: 600ms ${slide('0, 100px')} !important;
//       }
//     }
