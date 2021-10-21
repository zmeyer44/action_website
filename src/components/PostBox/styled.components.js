import styled from "styled-components"

export const PostBoxWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: clamp(95vw, 50vw, 600px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid rgb(207, 217, 222);
  border-radius: 8px;
  margin: 2em;
  .search_section {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.7em 1em;
    form {
      flex: 1;
      margin-bottom: 0;
      display: flex;
      flex-direction: column;

      .form_row {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .profile {
          margin-right: 1em;
          img {
            margin: 0;
            border-radius: 50%;
          }
          .profile_image {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin: 0;
            background-position: center;
            background-size: cover;
          }
        }
        .url {
          flex: 1;
          margin: 0 2em 0 0;

          > div {
            border-radius: 0;
            border-width: 0 0 2px;
          }

          input {
            padding: 0;
            min-height: unset;
          }
        }
        &.bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0.5em;
          button {
            padding: 7px 20px;
            font-size: 16px;
            margin-top: auto !important;
          }
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 95%;
  }
`
export const ShareWrapper = styled.div`
  display: flex;
  align-items: center;
  .switch {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    input {
      display: none;
      & + span {
        padding-left: 50px;
        min-height: 24px;
        line-height: 24px;
        display: block;
        color: #99a3ba;
        position: relative;
        white-space: nowrap;
        transition: color 0.3s ease;
        &:before,
        &:after {
          content: "";
          display: block;
          position: absolute;
          border-radius: 12px;
        }
        &:before {
          top: 0;
          left: 0;
          width: 42px;
          height: 24px;
          background: #e4ecfa;
          transition: all 0.3s ease;
        }
        &:after {
          width: 18px;
          height: 18px;
          background: #fff;
          top: 3px;
          left: 3px;
          box-shadow: 0 1px 3px rgba(#121621, 0.1);
          transition: all 0.45s ease;
        }
        em {
          width: 8px;
          height: 7px;
          background: #99a3ba;
          position: absolute;
          left: 8px;
          bottom: 7px;
          border-radius: 2px;
          display: block;
          z-index: 1;
          transition: all 0.45s ease;
          &:before {
            content: "";
            width: 2px;
            height: 2px;
            border-radius: 1px;
            background: #fff;
            position: absolute;
            display: block;
            left: 50%;
            top: 50%;
            margin: -1px 0 0 -1px;
          }
          &:after {
            content: "";
            display: block;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            border: 1px solid #99a3ba;
            border-bottom: 0;
            width: 6px;
            height: 4px;
            left: 1px;
            bottom: 6px;
            position: absolute;
            z-index: 1;
            transform-origin: 0 100%;
            transition: all 0.45s ease;
            transform: rotate(0deg) translate(0, 0);
          }
        }
        strong {
          font-weight: normal;
          position: relative;
          display: block;
          top: 1px;
          &:before,
          &:after {
            font-size: 14px;
            font-weight: 300;
            display: block;
            font-family: "Poppins", sans-serif;
          }
          &:before {
            content: "Private";
            transition: all 0.3s ease 0.2s;
          }
          &:after {
            content: "Public";
            opacity: 0;
            visibility: hidden;
            position: absolute;
            left: 0;
            top: 0;
            color: #1273f8;
            transition: all 0.3s ease;
            transform: translate(2px, 0);
          }
        }
      }
      &:checked {
        & + span {
          &:before {
            background: rgba(#1273f8, 0.65);
          }
          &:after {
            background: #fff;
            transform: translate(18px, 0);
          }
          em {
            transform: translate(18px, 0);
            background: #1273f8;
            &:after {
              border-color: #1273f8;
              transform: rotate(-35deg) translate(0, 1px);
            }
          }
          strong {
            &:before {
              opacity: 0;
              visibility: hidden;
              transition: all 0.3s ease;
              transform: translate(-2px, 0);
            }
            &:after {
              opacity: 1;
              visibility: visible;
              transform: translate(0, 0);
              transition: all 0.3s ease 0.2s;
            }
          }
        }
      }
    }
  }
`
