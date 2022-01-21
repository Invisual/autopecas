import React, { Component } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { CtaLink } from '../components/CtaLink'
import { Styled } from '../styles/post.styles'
import { graphql } from 'gatsby'

class Template extends Component {
  render() {
    const { markdownRemark } = this.props.data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark

    return (
      <Layout>
        <SEO
          title={frontmatter.title}
          description={frontmatter.description}
          image={frontmatter.img}
          pathname={frontmatter.path}
        />

        <Styled.Main>
          <div
            className="post-image mt-5"
            style={{ backgroundImage: `url(${frontmatter.img})` }}
          ></div>

          <div className="container">
            <h1 className="post-title">{frontmatter.title}</h1>

            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <div className="spacer"></div>

            <CtaLink
              url="/blog"
              text="voltar"
              reverted
              className="post-button"
            />
          </div>
        </Styled.Main>
      </Layout>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        description
        img
      }
    }
  }
`
