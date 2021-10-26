import styled from 'styled-components'

const Main = styled.main`
  max-width: 100vw;
  min-height: 87vh;
  overflow-x: hidden;
  background: ${({ theme }) => theme.darkBackground};
  padding-top: 20rem;
`

export const Styled = {
  Main,
}
