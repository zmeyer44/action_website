import styled from "styled-components"

export const ImageFormWrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.white};
  padding: 1em;
  border-radius: 8px;
  flex-direction: column;
  width: 90vw;
  .cover_section {
    width: 100%;
    background-position: center;
    background-size: cover;
    background-color: #bdbdbd;
    border-radius: 8px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg {
      font-size: 25px;
      color: #fff;
    }
    :hover {
      background-color: #d4d4d4;
    }
  }
  .info_section {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    .profile_image {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      border: 4px solid #fff;
      width: clamp(100px, 13vw, 135px);
      height: clamp(100px, 13vw, 135px);
      border-radius: 50%;
      margin-top: clamp(-30px, -7vw, -70px);
      background-position: center;
      background-size: cover;
      margin-bottom: 0.5em;

      svg {
        font-size: 25px;
        color: #d4d4d4;
      }
      :hover {
        background-color: #d4d4d4;
      }
    }
  }
  .error {
    margin-bottom: 0;
    margin-top: 0.5em;
    color: ${props => props.theme.colors.error};
  }
  .message {
    margin-bottom: 0;
    margin-top: 0.5em;
    color: ${props => props.theme.colors.success};
  }

  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    width: 400px;
  }
`
export const AuthActionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: ${props => props.theme.colors.white};
  margin-top: 0.7em;
  font-size: 16px;

  a:hover {
    text-decoration: underline;
  }
`
