import React from 'react'
import ChevronIcon from '../assets/images/chevron.svg'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const CtaLink = ({ text, url, light, reverted, className }) => (
  <Link to={url} className={`cta-link ${className || ''}`}>
    <StyledLink light={light} reverted={reverted}>
      {reverted ? (
        <>
          <ChevronIcon /> {text}
        </>
      ) : (
        <>
          {text} <ChevronIcon />
        </>
      )}
    </StyledLink>
  </Link>
)

const StyledLink = styled.span`
  min-width: 11rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  float: right;
  padding: 0.7rem 0;
  margin-top: ${({ theme }) => theme.spacingXXS};
  font-size: 1.4rem;
  line-height: 2.5rem;
  border-bottom: 1px solid;
  color: ${(props) =>
    props.light ? props.theme.lightText : props.theme.darkTitle};
  border-color: ${(props) =>
    props.light ? props.theme.lightText : props.theme.darkTitle};

  svg {
    width: 0.7rem;
    transform: ${(props) => (props.reverted ? 'rotate(180deg)' : 'none')};
    stroke: ${(props) =>
      props.light ? props.theme.lightText : props.theme.darkTitle};
  }

  @media screen and (max-width: 1000px) {
    min-width: 20rem;
  }
`
