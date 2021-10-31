import React from 'react'
import styled from 'styled-components'

export const Title = ({ text, light, ...props }) => (
  <StyledTitle light={light} {...props}>
    {text}
  </StyledTitle>
)

const StyledTitle = styled.h2`
  color: ${(props) =>
    props.light ? props.theme.lightTitle : props.theme.darkTitle};
  font-size: 2.5rem;
  font-weight: ${({ theme }) => theme.fontRegular};
  letter-spacing: 0.25rem;
  text-align: center;
  text-transform: uppercase;
`
