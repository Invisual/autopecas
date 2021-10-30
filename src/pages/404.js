import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Title } from '../components/Title'
import { Text } from '../components/Text'
import styled from 'styled-components'
import { Link } from 'gatsby'

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Empresa" />
      <Styled404>
        <Title text="Página não encontrada" />
        <Text>
          Ups, parece que esta página não existe. Clique{' '}
          <Link to="/">aqui</Link> para regressar à página inicial.
        </Text>
        <h3 className="big-text">404</h3>
      </Styled404>
    </Layout>
  )
}

export default NotFoundPage

const Styled404 = styled.section`
  .text {
    margin-top: ${({ theme }) => theme.spacingS};
    text-align: center;

    a {
      color: ${({ theme }) => theme.darkBackground};
      font-weight: ${({ theme }) => theme.fontBold};
    }
  }

  .big-text {
    color: ${({ theme }) => theme.darkBackground};
    font-size: 25rem;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacingL};
  }

  @media screen and (max-width: 550px) {
    .big-text {
      font-size: 10rem;
    }
  }
`
