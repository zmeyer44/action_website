import styled from "styled-components"

export const PostWrapper = styled.div`
  background-color: ${props => props.theme.colors.white};
  width: clamp(95vw, 50vw, 600px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid rgb(207, 217, 222);
  border-radius: 8px;
  margin: 0 0 1em;
  position: relative;
  .top_section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-self: flex-start;
    padding: 1em 0.2em 0.2em 1em;
    .profile_image_container {
      margin-right: 1em;
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
    .profile_info {
      h2 {
        font-size: 16px;
        margin-bottom: 0;
      }
      span {
        font-size: 13px;
        color: #536471;
      }
    }
  }
  .post_card {
    margin: 0 0.3em 0.7em;
  }
  .post_info {
    width: 90%;
    max-width: 450px;
    margin-top: 0.2em;
    margin-bottom: 0.6em;
    display: flex;
    align-items: center;
    justify-content: start;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.md}) {
    width: 95%;
  }
`
