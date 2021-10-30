import React from 'react'
import styled, { keyframes } from 'styled-components'

export const LoadingSpinner = ({ light }) => (
  <StyledLoading light={light} className="loading" />
)

const load = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const StyledLoading = styled.div`
  font-size: 1rem;
  margin: 0 auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: ${(props) =>
    props.light ? props.theme.lightBackground : props.theme.darkBackground};
  background: -moz-linear-gradient(
    left,
    ${(props) =>
        props.light ? props.theme.lightBackground : props.theme.darkBackground}
      10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -webkit-linear-gradient(
    left,
    ${(props) =>
        props.light ? props.theme.lightBackground : props.theme.darkBackground}
      10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -o-linear-gradient(
    left,
    ${(props) =>
        props.light ? props.theme.lightBackground : props.theme.darkBackground}
      10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: -ms-linear-gradient(
    left,
    ${(props) =>
        props.light ? props.theme.lightBackground : props.theme.darkBackground}
      10%,
    rgba(255, 255, 255, 0) 42%
  );
  background: linear-gradient(to right, 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  animation: ${load} 1.4s infinite linear;
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: ${(props) =>
      props.light ? props.theme.lightBackground : props.theme.darkBackground};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  &:after {
    background: ${(props) =>
      props.light ? props.theme.darkBackground : props.theme.lightBackground};
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`
