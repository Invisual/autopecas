import styled from 'styled-components'

const Main = styled.main`
  max-width: 100vw;
  overflow-x: hidden;

  .section-image {
    background-image: url('https://res.cloudinary.com/ddbuiilei/image/upload/q_auto/w_auto/f_auto/v1635609908/blog_ew7ghv.png');
    background-size: cover;
    background-position: center;
    width: 100%inherit;
    height: 100vh;
  }
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
  padding: 0 0 ${({ theme }) => theme.spacingXL};

  .banner {
    width: 100%;
    min-height: 65rem;
    background-position: 50% 25%;
    background-size: cover;
    padding: ${({ theme }) =>
      `${theme.spacingL} ${theme.spacingM} ${theme.spacingM}`};
    text-align: center;

    h2 {
      font-size: 4.5rem;
      line-height: 5.9rem;
      letter-spacing: 1rem;
      font-weight: ${({ theme }) => theme.fontRegular};
      color: ${({ theme }) => theme.introTitle};
      text-transform: uppercase;
      max-width: 90%;
      margin: 0 auto;
    }
  }

  .carousel {
    margin-top: ${({ theme }) => theme.spacingL};
  }

  @media screen and (max-width: 1000px) {
    .banner h2 {
      font-size: 2.5rem;
      line-height: 3.8rem;
      letter-spacing: 0.5rem;
      max-width: unset;
    }
  }

  @media screen and (max-width: 450px) {
    .banner {
      padding: ${({ theme }) =>
        `${theme.spacingL} ${theme.spacingS} ${theme.spacingS}`};
    }
  }
`

const Blog = styled.section`
  .wrapper {
    margin-top: ${({ theme }) => theme.spacingL};
  }

  img  {
    max-width: 100%;
    width: 100%;
  }

  .banner-homepage{
    max-width: 100%;
    width: 100%;
    max-height: 45vh;
    object-fit: cover;
  }
  .text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: ${({ theme }) => theme.spacingS};
  }

  h4 {
    color: ${({ theme }) => theme.darkBackground};
    font-size: 2.5rem;
    font-weight: ${({ theme }) => theme.fontRegular};
    line-height: 3.5rem;
    letter-spacing: -0.125rem;
  }

  p {
    max-width: 65rem;
    color: ${({ theme }) => theme.darkText};
    font-size: 1.8rem;
    line-height: 2.5rem;
    margin-top: ${({ theme }) => theme.spacingXS};
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
