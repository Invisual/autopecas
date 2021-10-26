import styled from 'styled-components'

const Main = styled.main`
  max-width: 100vw;
  overflow-x: hidden;
`

const Intro = styled.section`
  background: ${({ theme }) => theme.darkBackground};
`

const Timeline = styled.section`
  .item {
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: ${({ theme }) => theme.spacingM};

    &.right {
      justify-content: space-between;
      align-items: center;
    }

    &:not(:first-child) {
      margin-top: 35rem;
    }

    .image-wrapper {
      position: relative;
      max-width: 45%;

      img {
        max-width: 100%;
      }
    }

    h3 {
      position: absolute;
      font-size: 21.5rem;
      line-height: 21.5rem;
      letter-spacing: -2.15rem;
      color: ${({ theme }) => theme.lightGrey};
      white-space: nowrap;
      z-index: -1;

      &.year-right {
        top: -7rem;
        left: 93%;
      }
      &.year-left {
        top: -7rem;
        right: 107%;
      }
      &.year-centered {
        top: -15rem;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .text {
      max-width: 35rem;
      color: ${({ theme }) => theme.darkSubTitle};

      &.right-bottom {
        transform: translate(
          ${({ theme }) => `${theme.spacingXL}, -${theme.spacingS}`}
        );
      }
      &.right-center {
        transform: translate(
          ${({ theme }) => `${theme.spacingXL}, -${theme.spacingXL}`}
        );
      }
      &.left-center {
        transform: translate(
          ${({ theme }) => `${theme.spacingXL}, ${theme.spacingS}`}
        );
      }
      &.left-bottom {
        transform: translate(
          ${({ theme }) => `${theme.spacingXL}, ${theme.spacingL}`}
        );
      }
    }
  }

  @media screen and (max-width: 1150px) {
    .item .text {
      &.right-bottom {
        transform: translate(
          ${({ theme }) => `${theme.spacingM}, ${theme.spacingS}`}
        );
      }
      &.right-center {
        transform: translate(
          ${({ theme }) => `${theme.spacingM}, -${theme.spacingM}`}
        );
      }
      &.left-center {
        transform: translate(
          ${({ theme }) => `${theme.spacingM}, ${theme.spacingS}`}
        );
      }
      &.left-bottom {
        transform: translate(
          ${({ theme }) => `${theme.spacingL}, ${theme.spacingL}`}
        );
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .item {
      flex-direction: column;
      align-items: flex-start;

      &.right {
        align-items: flex-end;
        text-align: right;
      }

      .image-wrapper {
        max-width: 70%;
        order: 1;
      }

      h3 {
        font-size: 12rem;
        line-height: 13rem;
        letter-spacing: -0.8rem;

        &.year-centered {
          top: -9rem;
        }
        &.year-left {
          top: -9rem;
          right: 90%;
        }
      }

      .text {
        order: 2;
        transform: none !important;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .item {
      &:not(:first-child) {
        margin-top: 25rem;
      }

      h3 {
        font-size: 9rem;
      }
    }
  }

  @media screen and (max-width: 430px) {
    .item {
      h3 {
        font-size: 7rem;
        letter-spacing: -0.6rem;
      }
    }
  }

  @media screen and (max-width: 330px) {
    .item {
      h3 {
        font-size: 5rem;
        letter-spacing: -0.4rem;
      }
    }
  }
`

const Counters = styled.div`
  margin-top: ${({ theme }) => theme.spacingM};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .counter {
    margin: 0 ${({ theme }) => theme.spacingM};

    h3 {
      font-size: 7.5rem;
      color: ${({ theme }) => theme.introTitle};
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacingM};

    .counter h3 {
      font-size: 6rem;
    }
  }
`

const Contact = styled.section`
  margin-top: ${({ theme }) => theme.spacingM};
`

export const Styled = {
  Main,
  Intro,
  Timeline,
  Counters,
  Contact,
}
