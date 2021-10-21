import styled from "styled-components"

export const FeedWrapper = styled.main`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 60px;
  header {
    height: 70px;
    display: flex;
  }
  .content {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: #f2f3f5;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;

    margin: 0;
    &::-webkit-scrollbar {
      width: 0.4rem;
    }
    &::-webkit-scrollbar-track {
      background: #eaeaea;
    }
    &::-webkit-scrollbar-thumb {
      background: #0052ff;
      border-radius: 0.25rem;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-bottom: 0;
    margin-top: 60px;
    flex-direction: column;
  }
`
export const FeedHeaderWrapper = styled.main`
  background-color: #ffffff;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  .search_bar {
    display: none;
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex: 1;

    ul {
      flex-grow: 1;
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;
      height: 100%;
      justify-content: space-evenly;

      li {
        max-width: calc(15vw - 55px);
        min-width: 50px;
        height: 100%;
        flex-grow: 1;
        display: list-item;
        text-align: -webkit-match-parent;

        a {
          div {
            display: flex;
            height: 60px;
            align-items: center;
            justify-content: center;
            font-size: 25px;
            position: relative;
          }
          &.active div {
            color: ${props => props.theme.colors.primary};
            :before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 5px;
              border-radius: 3px;
              background-color: ${props => props.theme.colors.primary};
            }
          }
        }
      }
    }
  }

  .profile_info {
    display: none;
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    top: 0;
    bottom: unset;
    height: 60px;
    .search_bar {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: auto;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          margin: 0 1em;
        }
      }
      label {
        position: relative;
        .search_icon {
          position: absolute;
          top: 10px;
          left: 10px;
          color: #808080;
        }
        input {
          height: 40px;
          border-radius: 40px;
          padding-left: 35px;
          -webkit-tap-highlight-color: transparent;
          border: 1px solid rgb(207, 217, 222);
          font-size: 16px;
          :focus {
            outline: none;
          }
        }
      }
    }
    .icons {
      max-width: 550px;
      ul {
        li {
          a {
            &.active {
              div {
                color: ${props => props.theme.colors.primary};
                :before {
                  content: "";
                  position: absolute;
                  top: unset;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  height: 5px;
                  border-radius: 3px;
                  background-color: ${props => props.theme.colors.primary};
                }
              }
            }
          }
        }
      }
    }
  }
  @media (min-width: 975px) {
    .search_bar {
      img {
      }
      label {
        .search_icon {
        }
        input {
        }
      }
    }
    .icons {
      ul {
        li {
          a {
            &.active {
            }
          }
        }
      }
    }
    .profile_info {
      margin-left: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        margin: 0 1em 0 0;
        border-radius: 50%;
      }
      .profile_image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 0 1em 0 0;
        background-position: center;
        background-size: cover;
      }
      h4 {
        margin-bottom: 0;
        margin-right: 1em;
      }
      .btn {
        display: none;
        margin: 0 0.3em;
        background-color: ${props => props.theme.colors.primary}40;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
        :hover {
          background-color: ${props => props.theme.colors.primary}29;
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    .search_bar {
      img {
      }
      label {
        .search_icon {
        }
        input {
        }
      }
    }
    .icons {
      ul {
        li {
          div {
            &.active {
            }
          }
        }
      }
    }
    .profile_info {
      img {
      }
      h4 {
      }
      .btn {
        display: flex;
      }
    }
  }
`
