import styled from 'styled-components'

const Main = styled.main`
  .post-image {
    width: 100%;
    min-height: 60vh;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .container {
    padding: ${({ theme }) =>
      `${theme.spacingL} ${theme.spacingM} ${theme.spacingXL} ${theme.spacingM}`};
  }

  .post-title {
    color: ${({ theme }) => theme.darkSubTitle};
    font-weight: ${({ theme }) => theme.fontRegular};
    font-size: 2.5rem;
    line-height: 3.5rem;
    letter-spacing: -0.125rem;
  }

  .post-content {
    p {
      color: ${({ theme }) => theme.darkText};
      font-size: 1.8rem;
      line-height: 2.5rem;
      margin-top: ${({ theme }) => theme.spacingS};
    }

    img {
      max-width: 100%;

      &.mtm {
        margin-top: ${({ theme }) => theme.spacingM};
      }
    }

    .main-image {
      width: 100%;
      margin-top: ${({ theme }) => theme.spacingL};
    }

    .split {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: ${({ theme }) => theme.spacingL};
    }

    .post-button {
      margin-top: ${({ theme }) => theme.spacingL};
    }
  }

  .spacer {
    padding-top: ${({ theme }) => theme.spacingL};
  }

  @media screen and (max-width: 1000px) {
    .post-image {
      min-height: 40vh;
    }

    .container {
      padding: ${({ theme }) =>
        `${theme.spacingM} ${theme.spacingS} ${theme.spacingL} ${theme.spacingS}`};
    }

    .split {
      flex-direction: column;
    }
  }
`

export const Styled = {
  Main,
}
