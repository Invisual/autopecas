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
  position: relative;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  margin-top: ${({ theme }) => theme.spacingM};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacingM};
  padding: ${({ theme }) => `${theme.spacingL} ${theme.spacingM}`};
  text-align: right;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  h2 {
    font-size: 4.5rem;
    line-height: 6rem;
    letter-spacing: 1rem;
    font-weight: ${({ theme }) => theme.fontBold};
    color: ${({ theme }) => theme.lightText};
    text-transform: uppercase;
    opacity: 0.45;
    z-index: 1;
  }

  .counter {
    z-index: 1;

    h3 {
      font-size: 7.5rem;
      color: ${({ theme }) => theme.introTitle};
      text-transform: uppercase;
    }

    .text {
      color: ${({ theme }) => theme.darkTitle};
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 1000px) {
    background-image: url(${(props) => props.imageMobile});
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 0;
    min-height: 70vh;

    h2  {
      position: absolute;
      opacity: 1;
      top: ${({ theme }) => theme.spacingXL};
      left: 50%;
      left: 0;
      right: 0;
      text-align: center;
    }

    .counter {
      text-align: center;

      h3 {
        font-size: 5rem;
      }

      .text {
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (max-width: 650px) {
    padding: ${({ theme }) => `${theme.spacingL} ${theme.spacingS}`};

    .counter {
      h3 {
        font-size: 4rem;
      }

      .text {
        font-size: 1.6rem;
      }
    }
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    justify-content: flex-end;

    h2 {
      font-size: 3.5rem;
      line-height: 5rem;
    }

    .counter {
      text-align: left;
      margin: ${({ theme }) => theme.spacingS} 0;
    }
  }

  @media screen and (max-width: 400px) {
    min-height: 60vh;
    padding: ${({ theme }) => `${theme.spacingM} ${theme.spacingS}`};

    h2 {
      top: ${({ theme }) => theme.spacingM};
      font-size: 2.7rem;
      line-height: 4.2rem;
      letter-spacing: 0.6rem;
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
