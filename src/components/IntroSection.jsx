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
      image={image}
    >
      <h2 dangerouslySetInnerHTML={{ __html: text }} />
    </StyledIntro>
  )
}

const StyledIntro = styled.div`
  margin: ${({ theme }) => `${theme.spacingL} 0 0 ${theme.spacingS}`};

  h2 {
    font-weight: ${({ theme }) => theme.fontRegular};
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    letter-spacing: ${(props) => props.letterSpacing};
    color: ${({ theme }) => theme.introTitle};
    text-transform: uppercase;
  }

  span {
    color: ${({ theme }) => theme.lightTitle};
  }

  @media screen and (max-width: 1000px) {
    margin-top: 0;

    h2 {
      font-size: 6rem;
      line-height: 7.6rem;
    }
  }

  @media screen and (max-width: 500px) {
    margin-left: 0;
    h2 {
      font-size: 4.5rem;
      line-height: 6rem;
    }
  }
  @media screen and (max-width: 400px) {
    h2 {
      font-size: 3.5rem;
      line-height: 4.6rem;
    }
  }
`
