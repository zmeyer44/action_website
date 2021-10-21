import styled from "styled-components"

export const SchoolsWrapper = styled.div`
  padding-bottom: 30px;
  padding-top: 30px;
  display: flex;
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  background-color: rgba(244, 246, 250, 200);
  align-items: center;
  justify-content: center;

  .carousel-container {
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }
  .react-multi-carousel-track {
    align-items: center;
    justify-content: center;

    li {
      display: flex;
      min-width: 170px;
      align-items: center;
      justify-content: center;
      margin-bottom: 0;
      cursor: pointer;

      .school {
        margin: 0 1em;
        align-items: center;
        justify-content: center;
        img {
          -webkit-filter: grayscale(100%);
          filter: grayscale(100%);
          pointer-events: none;
          transition: ${props => props.theme.transition.all};
        }
      }

      &:hover {
        img {
          -webkit-filter: grayscale(0%);
          filter: grayscale(0%);
        }
      }
    }
  }
  &::after {
    content: "";
    background: linear-gradient(
      to right,
      rgb(244, 246, 250) 0,
      rgba(244, 246, 250, 0.1) 15%,
      rgba(244, 246, 250, 0.1) 85%,
      rgb(244, 246, 250) 100%
    );
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    .react-multi-carousel-track {
      li {
        min-width: 200px;
      }
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
  }
`
