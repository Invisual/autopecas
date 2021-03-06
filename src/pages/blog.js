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
  const [postsNumber, setPostsNumber] = useState(4)

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

  const seeMorePosts = () => setPostsNumber(postsNumber + 4)

  const visiblePosts = posts.slice(0, postsNumber)

  return (
    <Layout>
      <SEO
        title="Blog"
        description="AUTOPEÇAS.PT - Fique a par das últimas novidades da Autopeças.pt."
      />
      <Styled.Main>
        <section className="highlighted-post">
          {console.log(posts)}
          <div
            className="image highlight-new-image"
            style={{ backgroundImage: `url(${posts[0].imgHighNew})` }}
          ></div>
          <div className="content">
            <h1
              data-sal="slide-right"
              data-sal-easing="ease"
              data-sal-duration="600"
            >
              {posts[0].title}
            </h1>
            <Text light>{posts[0].description}</Text>
            <CtaLink
              light
              text="saber mais"
              url={posts[0].path}
              data-sal="slide-left"
              data-sal-easing="ease"
              data-sal-duration="600"
            />
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
                    style={{ backgroundImage: `url(${p.imgCard})` }}
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
            imgHighNew
            imgCard
            imgBanner
            status
            description
          }
        }
      }
    }
  }
`
