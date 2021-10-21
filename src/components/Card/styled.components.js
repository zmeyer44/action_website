import styled from "styled-components"

export const CardWrapper = styled.div`
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
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 500ms cubic-bezier(0.6, -0.5, 0.4, 1.5);
  flex: 1;
  width: 90%;
  max-width: 450px;
  padding: 0.2em;
  margin-bottom: 1.5em;
  .image_section {
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 50vw;
    max-height: 200px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
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
    button {
      position: absolute;
      top: 10px;
      right: 10px;
      background-color: #fff;
      width: 35px;
      height: 35px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      transition: all 500ms cubic-bezier(0.6, -0.5, 0.4, 1.5);
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      .like_btn,
      .unlike_btn {
        font-size: 17px;
        min-width: 17px;
        min-height: 17px;
      }
      .unlike_btn {
        color: #1273f8;
      }
      svg {
        font-size: 17px;
        width: 17px;
        height: 17px;
      }
      :hover {
        svg {
          color: #1273f8;
        }
      }
    }
  }
  .text_section {
    display: flex;
    flex-direction: column;
    padding: 0.75em 1em 0.5em;
    background-color: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;

    .title {
      border-bottom: 2px solid #1273f8;
      margin-bottom: 0.5em;
      h4 {
        font-size: 1.3em;
        max-height: 1.5em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 0.2em;

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
    p {
      max-height: 4em;
      font-size: 1em;
      line-height: 1.3em;
      margin-bottom: 0;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    span.source {
      color: #8899a6;
      max-height: 2em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 1em;
      line-height: 1.3em;
      padding-top: 6px;
      margin-top: 6px;
      border-top: 1px solid #8899a6;
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
