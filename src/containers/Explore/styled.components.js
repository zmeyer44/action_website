import styled from "styled-components"

export const ExploreWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;

  .top_bar {
    width: 95%;
    padding: 0.5em 1em 0.5em 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    .icons {
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        font-size: 25px;
      }
    }
  }

  .card {
    border-radius: 12px;
    width: clamp(95vw, 50vw, 600px);
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    color: #fff;
    padding: 1.5em 0.75em;
    margin: 0.5em 2.5vw;

    span {
      font-size: 1.2em;
    }

    h3 {
      margin: 0.2em 0 0;
      font-size: 1.75em;
    }
  }

  .carousel-container {
    width: 100vw;

    .custom-dot-list-style {
      bottom: -17px;
      li {
        button {
          cursor: pointer;
          text-align: center;
          transition: all 250ms ease;
          border: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-color: #1273f8;
          margin-left: 1px;
          margin-right: 2px;

          width: 7px;
          height: 4px;
          border-radius: 4px;
        }
        &.react-multi-carousel-dot--active button {
          width: 14px;
          background-color: #000;
        }
      }
    }
  }

  .carousel-container.collections {
    padding-bottom: 1em;
    ul li {
      > div {
        margin-left: 0.5em;
      }
    }
  }
  .collection_group {
    margin-top: 2em;
    width: clamp(100vw, 50vw, 600px);
    display: flex;
    flex-direction: column;

    .top_section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.5em;
      margin-bottom: 0.5em;

      h3 {
        margin-bottom: 0;
      }
      span {
        font-size: 0.9em;
      }
    }
    .create_btn {
      margin-bottom: 0.5em;
      align-self: center;
      width: clamp(80vw, 50vw, 600px);
      > span {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          font-size: 25px;
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: flex-start;
  }
`

export const CollectionCardWrapper = styled.div`
  @keyframes pulse {
    0% {
      background-color: #94a3b8;
    }

    50% {
      background-color: #cbd5e1;
    }

    100% {
      background-color: #94a3b8;
    }
  }
  display: flex;
  flex-direction: column;
  border-radius: 13px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 500ms cubic-bezier(0.6, -0.5, 0.4, 1.5);
  flex: 1;
  width: clamp(80vw, 50vw, 600px);
  padding: 0.2em;
  margin-bottom: 1.5em;
  .image_section {
    border: 3px solid #fff;
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 175px;
    border-top-left-radius: 13px;
    border-top-right-radius: 13px;
    .image {
      position: absolute;
      top: -1px;
      left: -1px;
      bottom: -1px;
      right: -1px;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      animation: pulse 2s infinite ease-in-out;
      transition: all 500ms cubic-bezier(0.6, -0.5, 0.4, 1.5);
    }
  }
  .text_section {
    display: flex;
    flex-direction: column;
    padding: 0.8em 1em 0.7em;
    background-color: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;

    .title {
      margin-bottom: 0.3em;
      h4 {
        font-size: 1.1em;
        max-height: 1.1em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        .lds-ellipsis {
          display: inline-block;
          position: relative;
          width: 4em;
          height: 1.3em;
        }
        .lds-ellipsis div {
          position: absolute;
          top: 10px;
          width: 0.3em;
          height: 0.3em;
          border-radius: 50%;
          background-color: #000;
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .lds-ellipsis div:nth-child(1) {
          left: 4px;
          animation: lds-ellipsis1 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(2) {
          left: 4px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(3) {
          left: 16px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(4) {
          left: 28px;
          animation: lds-ellipsis3 0.6s infinite;
        }
        @keyframes lds-ellipsis1 {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes lds-ellipsis3 {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }
        @keyframes lds-ellipsis2 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(12px, 0);
          }
        }
      }
    }
    span.subtitle {
      max-height: 2em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.85em;
      line-height: 1.3em;
    }
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  :hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  :hover .image {
    transform: scale(1.1);
  }
`
export const UserCardWrapper = styled.div`
  border-radius: 12px;
  width: clamp(40vw, 40vw, 600px);
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  padding: 1.5em 0.75em;
  margin: 0.5em 2.5vw;

  span {
    font-size: 1em;
  }

  h3 {
    margin: 0.2em 0 0;
    font-size: 1.3em;
  }
`
export const CreateModal = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: -100vh;
  left: 0;
  transition: all 200ms ease;

  &.active {
    bottom: 0;
  }

  .main {
    height: 90vh;
    width: 100%;
    border-radius: 30px;
    background-color: #1273f8;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    padding: 1.5em;

    .close_btn {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 30px;
      color: #072e63;
    }
    h3 {
      color: #fff;
    }

    .cover_image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: #0a4594;
      border-radius: 30px;
      width: 80%;
      padding: 2em;
      min-height: 152px;

      .icon {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background: #b7d5fc;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        margin-bottom: 0.5em;
      }
      span {
        color: #fff;
      }
    }

    form {
      width: 90%;
      margin-top: 1em;

      .text {
        margin-top: 16px;
      }

      label {
        margin-bottom: 3px;
        color: #fff;
      }

      input[type="text"] {
        padding: 0 0.5em;
        min-height: 42px;
        background: #e7f1fe;
      }
      button[type="submit"] {
        background-color: #fff;
        color: ${props => props.theme.colors.primary};
        padding: 10px 24px;
      }
    }
  }
`
