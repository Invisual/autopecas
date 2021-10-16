import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Styled } from '../styles/index.styles'

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Styled.Main>
        <Styled.Title>This is the Home page</Styled.Title>
      </Styled.Main>
    </Layout>
  )
}

export default IndexPage
