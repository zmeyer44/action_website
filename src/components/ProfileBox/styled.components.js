import styled from "styled-components"

export const ProfileBoxWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: 95%;
  display: none;
  border: 1px solid rgb(207, 217, 222);
  border-radius: 8px;
  margin-top: 2em;
  text-align: center;

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95vw;

    .cover_section {
      width: 100%;
      background-position: center;
      background-size: cover;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      height: 13vw;
      min-height: 70px;
      max-height: 200px;
    }
    .info_section {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      img {
        width: clamp(75px, 13vw, 130px);
        height: clamp(75px, 13vw, 130px);
        border-radius: 50%;
        margin-top: clamp(-30px, -7vw, -70px);
      }
      .profile_image {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 4px solid #fff;
        width: clamp(75px, 13vw, 130px);
        height: clamp(75px, 13vw, 130px);
        border-radius: 50%;
        margin-top: clamp(-30px, -7vw, -70px);
        background-position: center;
        background-size: cover;
        margin-bottom: 0.5em;
      }
      .bottom_section {
        display: flex;
        width: 100%;
        border-top: 1px solid rgb(207, 217, 222);
        .option {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1em;
          border-right: 1px solid rgb(207, 217, 222);
          cursor: pointer;
          :nth-last-of-type(1) {
            border-right: none;
          }
          :hover {
            background-color: #4d9eff33;
          }
          span {
            margin-left: 1em;
          }
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 30vw;
    .cover_section {
      height: 8vw;
    }
    .info_section {
      img {
        width: clamp(60px, 13vw, 100px);
        height: clamp(60px, 13vw, 100px);
      }
      h2 {
        font-size: 22px;
      }
      .bottom_section {
        display: flex;
        width: 100%;
        border-top: 1px solid rgb(207, 217, 222);
        .option {
          flex-direction: column;
          align-items: center;
          span {
            margin-left: 0;
            font-size: 12px;
            white-space: nowrap;
          }
        }
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    .cover_section {
    }
    .info_section {
      img {
      }
      h2 {
      }
      .bottom_section {
        .option {
          flex-direction: row;
          align-items: center;
          span {
            margin-left: 0.5em;
            font-size: 14px;
          }
        }
      }
    }
  }
`
