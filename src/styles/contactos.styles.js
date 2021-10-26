import styled from 'styled-components'

const Main = styled.main`
  max-width: 100vw;
  overflow-x: hidden;
`

const Intro = styled.section`
  background: ${({ theme }) => theme.darkBackground};
`

const Info = styled.section`
  .contact-info {
    max-width: 110rem;
    margin: ${({ theme }) => theme.spacingL} auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.darkSubTitle};
    }
  }

  .map {
    margin-top: ${({ theme }) => theme.spacingXL};
  }

  @media screen and (max-width: 800px) {
    .contact-info {
      flex-direction: column;
      gap: ${({ theme }) => theme.spacingL};
    }
  }
`

const Contact = styled.section`
  margin-top: ${({ theme }) => theme.spacingXL};
  padding-bottom: 0;
`

export const Styled = {
  Main,
  Intro,
  Info,
  Contact,
}
