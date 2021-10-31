import React from 'react'
import styled from 'styled-components'

export const IntroSection = ({
  text,
  image,
  fontSize,
  lineHeight,
  letterSpacing,
  topLineWidth,
  topLineSpacing,
}) => {
  return (
    <StyledIntro
      fontSize={fontSize}
      lineHeight={lineHeight}
      letterSpacing={letterSpacing}
      topLineWidth={topLineWidth}
      topLineSpacing={topLineSpacing}
      data-sal="fade"
      data-sal-easing="ease"
      data-sal-duration="600"
      data-sal-delay="100"
    >
      {text}
      <div className="image-wrapper">
        <img src={image} alt="Autopeças" />
      </div>
    </StyledIntro>
  )
}

const StyledIntro = styled.h2`
  position: relative;
  max-width: 110rem;
  font-weight: ${({ theme }) => theme.fontRegular};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
  color: ${({ theme }) => theme.introTitle};
  text-transform: uppercase;
  margin: ${({ theme }) => theme.spacingL} auto 0 auto;

  span {
    color: ${({ theme }) => theme.lightTitle};
  }

  .image-wrapper {
    max-width: 50rem;
    position: absolute;
    bottom: 1.5rem;
    left: 60rem;

    &:after {
      content: '';
      position: absolute;
      top: ${(props) =>
        props.topLineSpacing ? props.topLineSpacing : '-6rem'};
      right: 0;
      width: ${(props) => (props.topLineWidth ? props.topLineWidth : '26rem')};
      height: 0.3rem;
      background: ${({ theme }) => theme.lightTitle};
    }

    img {
      max-width: 100%;
      display: block;
    }
  }

  @media screen and (max-width: 1200px) {
    max-width: 75rem;

    .image-wrapper {
      max-width: 100%;
      position: relative;
      bottom: unset;
      left: unset;
      display: block;
      margin-top: ${({ theme }) => theme.spacingL};

      &:after {
        top: -5rem;
      }
    }
  }

  @media screen and (max-width: 800px) {
    max-width: 55rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 6rem;
    line-height: 7.5rem;
    max-width: 45rem;
  }

  @media screen and (max-width: 450px) {
    font-size: 4.5rem;
    line-height: 6rem;
    max-width: 36rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 3.5rem;
    line-height: 4.8rem;
    max-width: 30rem;
  }
`
