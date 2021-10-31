import React from 'react'
import ChevronLightIcon from '../assets/images/chevron-thin.svg'
import styled from 'styled-components'

export const BigButton = ({ text, onClick, className, isOpen }) => (
  <StyledButton
    className={className || undefined}
    onClick={onClick || undefined}
    isOpen={isOpen}
  >
    {text}
    <ChevronLightIcon />
  </StyledButton>
)

const StyledButton = styled.button`
  width: 30rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacingXXS} 0;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.darkTitle};
  text-transform: uppercase;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.darkTitle};
  cursor: pointer;
  transition: all 0.25s ease;

  svg {
    stroke: ${({ theme }) => theme.darkSubTitle};
    transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    transition: all 0.25s ease;
  }

  &:active,
  &:hover {
    color: ${({ theme }) => theme.darkBackground};
    border-bottom: 2px solid ${({ theme }) => theme.darkBackground};

    svg {
      stroke: ${({ theme }) => theme.darkTitle};
    }
  }
`
