import styled from "styled-components"

export const AuthFormWrapper = styled.div`
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
