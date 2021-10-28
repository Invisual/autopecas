import styled from 'styled-components'

const Main = styled.main`
  .highlighted-post {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacingM} 0 0 0;

    .image {
      flex-grow: 1;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .content {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      background-color: ${({ theme }) => theme.darkBackground};
      padding: 12rem ${({ theme }) => theme.spacingM};

      h1 {
        color: ${({ theme }) => theme.lightText};
        font-size: 2.5rem;
        font-weight: ${({ theme }) => theme.fontRegular};
        line-height: 3.5rem;
      }

      p {
        max-width: 50%;
        color: ${({ theme }) => theme.lightText};
        font-size: 1.8rem;
        line-height: 2.5rem;
      }

      .cta-link {
        position: absolute;
        bottom: ${({ theme }) => theme.spacingS};
        right: ${({ theme }) => theme.spacingM};
      }
    }
  }

  .posts {
    .container {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2%;
    }

    a {
      max-width: 32%;

      .date {
        color: ${({ theme }) => theme.darkTitle};
        font-size: 1.4rem;
        letter-spacing: 0.14rem;
      }

      .image {
        width: 100%;
        height: 80rem;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: ${({ theme }) => theme.spacingXXXS};
      }

      h2 {
        color: ${({ theme }) => theme.darkSubTitle};
        font-size: 2.5rem;
        font-weight: ${({ theme }) => theme.fontRegular};
        line-height: 3.5rem;
        margin-top: ${({ theme }) => theme.spacingS};
      }

      .text {
        max-width: 98%;
        margin-top: 2rem;
        line-height: 3rem;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    .posts a .image {
      height: 65rem;
    }
  }

  @media screen and (max-width: 1350px) {
    .posts a .image {
      height: 55rem;
    }
  }

  @media screen and (max-width: 1150px) {
    .posts a .image {
      height: 48rem;
    }
  }

  @media screen and (max-width: 1000px) {
    .highlighted-post .content {
      flex-direction: column;
      padding: ${({ theme }) => `${theme.spacingM} ${theme.spacingM} 24rem`};
      gap: ${({ theme }) => theme.spacingM};

      p {
        max-width: 100%;
      }

      .cta-link {
        bottom: ${({ theme }) => theme.spacingM};
      }
    }

    .posts {
      .container {
        justify-content: flex-start;
        gap: 20rem 2%;
      }

      a {
        max-width: 49%;

        .image {
          height: 60rem;
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    .posts a .image {
      height: 48rem;
    }
  }

  @media screen and (max-width: 650px) {
    .posts .container {
      gap: 15rem 2%;
    }
    .posts a .image {
      height: 38rem;
    }
  }

  @media screen and (max-width: 500px) {
    .posts a .image {
      height: 30rem;
    }

    .highlighted-post .content {
      padding: ${({ theme }) => `${theme.spacingM} ${theme.spacingS} 20rem`};
    }
  }

  @media screen and (max-width: 425px) {
    .posts .container {
      justify-content: center;
      gap: 12rem 2%;
    }
    .posts a {
      max-width: 75%;
    }
  }
`

export const Styled = {
  Main,
}
