import React from 'react'
import ChevronIcon from '../assets/images/chevron.svg'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const ImageCarousel = ({ images }) => {
  //if (!images || !(images.length > 0)) return null

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow left />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <>
      <StyledCarousel className="carousel desktop">
        <Slider {...settings}>
          {images.map((src) => (
            <div>
              <img src={src} />
            </div>
          ))}
        </Slider>
      </StyledCarousel>

      <StyledCarousel className="carousel mbl">
        <div className="images">
          {images.map((src) => (
            <div className="single-image">
              <img src={src} />
            </div>
          ))}
        </div>
      </StyledCarousel>
    </>
  )
}

const SliderArrow = ({ onClick, left }) => (
  <StyledArrow onClick={onClick} left={left}>
    <ChevronIcon />
  </StyledArrow>
)

const StyledCarousel = styled.div`
  width: 80%;
  margin: 0 auto;

  .slick-track {
    display: flex;
    align-items: center;
  }

  img {
    max-width: 100%;
    margin: 0 auto;
  }

  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: ${({ theme }) => theme.spacingM};
    place-items: center;

    .single-image {
      //margin: ${({ theme }) => theme.spacingS};
    }
  }

  @media screen and (max-width: 1200px) {
    width: 95%;
  }

  @media screen and (max-width: 550px) {
    .images {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 375px) {
    .images {
      grid-template-columns: 1fr 1fr;
    }
  }
`

const StyledArrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${(props) => (props.left ? 'unset' : '-2.5rem')};
  left: ${(props) => (props.left ? '-2.5rem' : 'unset')};
  cursor: pointer;

  svg {
    stroke: ${({ theme }) => theme.lightTitle};
    width: 1rem;
    transform: ${(props) =>
      props.left ? 'scale(1.2) rotate(180deg)' : 'scale(1.2)'};
  }

  @media screen and (max-width: 350px) {
    right: ${(props) => (props.left ? 'unset' : '-.5rem')};
    left: ${(props) => (props.left ? '-.5rem' : 'unset')};
  }
`
