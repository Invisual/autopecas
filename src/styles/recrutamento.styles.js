import styled from 'styled-components'

const Main = styled.main`
  max-width: 100vw;
  min-height: 87vh;
  overflow-x: hidden;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  padding-top: 20rem;

  .form-container {
    margin-bottom: ${({ theme }) => theme.spacingL};
  }
`

export const Styled = {
  Main,
}
