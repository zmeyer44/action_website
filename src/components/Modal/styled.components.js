import styled from "styled-components"
import theme from "../../theme"

export const ModalFormWrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.white};
  padding: 2em;
  border-radius: 8px;
  width: 90vw;
  form {
    width: 100%;
    margin-bottom: 0;
    div.form_items {
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
export const ModalSuccessFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  padding: 2em;
  border-radius: 8px;
  width: 90vw;
  .numbers {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-bottom: 1em;

    h1 {
      margin-bottom: 0;
      color: ${props => props.theme.colors.primary};
    }
    h2 {
      margin: 0;
    }
    h3 {
      margin: 0 0.5em;
    }
  }

  .copy {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: calc(90% - 50px);
      font-size: 14px;
      height: 50px;
      border-radius: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    button {
      height: 50px;
      width: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      border: none;
      outline: none;
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }

  h3 {
    span {
      font-size: 0.8em;
      font-weight: 400;
      color: #606060;
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
export const ModalActionsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: ${props => props.theme.colors.white};
  margin-top: 0.7em;
  font-size: 16px;

  span:hover {
    text-decoration: underline;
  }
`
