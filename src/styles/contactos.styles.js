import styled from 'styled-components'

const Main = styled.main`
  max-width: 100vw;
  overflow-x: hidden;
`

const Intro = styled.section`
  background-image: url(${(props) => props.image});
  background-position: 50% ​0;
  background-size: cover;
  min-height: 80vh;

  @media screen and (max-width: 1000px) {
    background-image: url(${(props) => props.mobileImage});
    background-position: center;
  }
`

const Info = styled.section`
  .contact-info {
    max-width: 110rem;
    margin: ${({ theme }) => theme.spacingL} auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.darkSubTitle};
      transition: color 0.25s ease;

      &:hover {
        color: ${({ theme }) => theme.darkBackground};
      }
    }
  }

  .map {
    margin-top: ${({ theme }) => theme.spacingXL};

    iframe {
      border: none;
    }
  }

  @media screen and (max-width: 800px) {
    .contact-info {
      flex-direction: column;
      gap: ${({ theme }) => theme.spacingL};
    }

    .map {
      min-height: 60rem;

      iframe {
        position: absolute;
        left: 0;
        right: 0;
      }
    }
  }
`

const Contact = styled.section`
  padding-bottom: 0;

  @media screen and (max-width: 1000px) {
    margin-top: ${({ theme }) => theme.spacingXL};
  }
`

export const Styled = {
  Main,
  Intro,
  Info,
  Contact,
}
