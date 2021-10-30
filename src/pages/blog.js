import React, { useState } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Title } from '../components/Title'
import { Text } from '../components/Text'
import { CtaLink } from '../components/CtaLink'
import { BigButton } from '../components/BigButton'
import { parseBlogPosts } from '../utils/helpers'
import { Styled } from '../styles/blog.styles'
import { graphql } from 'gatsby'

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const [postsNumber, setPostsNumber] = useState(3)

  const posts = parseBlogPosts(edges)
  if (!posts || !Boolean(posts.length)) {
    return (
      <Layout>
        <SEO title="Blog" />
        <Styled.Main>
          <Title text="De momento não temos nenhum artigo para mostrar." />
        </Styled.Main>
      </Layout>
    )
  }

  const seeMorePosts = () => setPostsNumber(postsNumber + 3)

  const visiblePosts = posts.slice(0, postsNumber)

  return (
    <Layout>
      <SEO title="Blog" />
      <Styled.Main>
        <section className="highlighted-post">
          <div
            className="image"
            style={{ backgroundImage: `url(${posts[0].img})` }}
          ></div>
          <div className="content">
            <h1>{posts[0].title}</h1>
            <Text light>{posts[0].description}</Text>
            <CtaLink light text="saber mais" url={posts[0].path} />
          </div>
        </section>

        <section className="posts">
          <div className="container">
            {visiblePosts.map((p) => (
              <a href={p.path} key={p.path}>
                <article className="single">
                  <span className="date">{p.date}</span>
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${p.img})` }}
                  ></div>
                  <h2>{p.title}</h2>
                  <Text>{p.description}</Text>
                </article>
              </a>
            ))}
          </div>

          {posts.length > postsNumber && (
            <BigButton
              text="Ver mais notícias"
              onClick={() => seeMorePosts()}
              className="more-posts"
            />
          )}
        </section>
      </Styled.Main>
    </Layout>
  )
}

export default BlogPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            path
            title
            img
            status
            description
          }
        }
      }
    }
  }
`
