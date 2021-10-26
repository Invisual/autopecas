import styled from 'styled-components'

const Main = styled.main`
  max-width: 100vw;
  overflow-x: hidden;
`

const About = styled.section`
  background: ${({ theme }) => theme.lightBackground};

  .about-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: ${({ theme }) => theme.spacingL};
    margin-top: ${({ theme }) => theme.spacingL};

    > div {
      width: 50%;
    }

    h3 {
      color: ${({ theme }) => theme.darkSubTitle};
      font-size: 2.5rem;
      font-weight: ${({ theme }) => theme.fontRegular};
      letter-spacing: -0.125rem;
    }

    .text {
      margin-top: ${({ theme }) => theme.spacingS};
    }

    img {
      max-width: 100%;
      box-shadow: 0 15px 50px rgba(0, 0, 0, 0.14);
    }
  }

  @media screen and (max-width: 1000px) {
    .about-container {
      flex-direction: column;
      gap: ${({ theme }) => theme.spacingM};

      > div {
        width: 100%;
      }

      .text-wrapper {
        order: 1;

        a {
          margin-top: ${({ theme }) => theme.spacingL};
        }
      }
    }
  }
`

const Clients = styled.section`
  background: ${({ theme }) => theme.darkBackground};

  .carousel {
    margin-top: ${({ theme }) => theme.spacingL};
  }
`

const Blog = styled.section`
  .wrapper {
    margin-top: ${({ theme }) => theme.spacingL};
  }

  img  {
    max-width: 100%;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: ${({ theme }) => theme.spacingXS};
  }

  h4 {
    color: ${({ theme }) => theme.darkBackground};
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.fontRegular};
    line-height: 3.5rem;
    letter-spacing: -0.125rem;
  }

  p {
    color: ${({ theme }) => theme.darkText};
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin-top: ${({ theme }) => theme.spacingXXXS};
  }

  @media screen and (max-width: 1000px) {
    h4 {
      margin-bottom: ${({ theme }) => theme.spacingS};
    }

    .cta {
      margin-top: ${({ theme }) => theme.spacingL};
      margin-left: auto;
    }
  }
`

const Contact = styled.section`
  padding-top: ${({ theme }) => theme.spacingXS} !important;
`

export const Styled = {
  Main,
  About,
  Clients,
  Blog,
  Contact,
}
