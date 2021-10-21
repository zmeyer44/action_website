import styled from "styled-components"

export const FooterWrapper = styled.footer`
  background-color: rgb(248, 251, 252);
  margin-top: 30px;
  padding-bottom: 28px;
  padding-top: 28px;

  .container {
    position: relative;
    width: 100%;
    padding: 0px 16px;
    margin: 0px auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    svg {
      margin-bottom: 16px;
    }
    h1 {
      margin-bottom: 12px;
    }

    p {
      margin-bottom: 0;
    }
    a {
      color: ${props => props.theme.colors.primary};
    }
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    margin-top: 100px;

    .container {
      flex-direction: row;

      width: 720px;
      svg {
        margin-bottom: 0;
      }
      h1 {
        margin-bottom: 0;
      }
    }
  }
`
