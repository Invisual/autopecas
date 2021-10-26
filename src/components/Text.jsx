import React from 'react'
import styled from 'styled-components'

export const Text = ({ children, light, className }) => (
  <StyledText
    light={light}
    className={className ? `text ${className}` : 'text'}
  >
    {children}
  </StyledText>
)

const StyledText = styled.p`
  color: ${(props) =>
    props.light ? props.theme.lightText : props.theme.darkText};
  font-size: 1.8rem;
  font-weight: ${({ theme }) => theme.fontRegular};
  line-height: 2.5rem;
`
