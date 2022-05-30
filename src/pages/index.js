import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { VideoSection } from '../components/VideoSection'
import { Title } from '../components/Title'
import { Text } from '../components/Text'
import { CtaLink } from '../components/CtaLink'
import { ImageCarousel } from '../components/ImageCarousel'
import { ContactForm } from '../components/ContactForm'
import MainVideo from '../assets/videos/geral.mp4'
import MainVideoPreview from '../assets/videos/geral-preview.mp4'
import { Styled } from '../styles/index.styles'
import { parseBlogPosts } from '../utils/helpers'
import { graphql } from 'gatsby'
import axios from 'axios'

const IndexPage = ({
  data: {
    contentJson: { home: pageContent, formularios: formContent },
    allMarkdownRemark: { edges },
  },
}) => {
  const [clientsLogos, setClientsLogos] = useState([])

  const post = parseBlogPosts(edges)[0]

  useEffect(() => {
    axios
      .get('https://res.cloudinary.com/ddbuiilei/raw/upload/v1653901784/logo.json')
      .then((res) => {
        const logos = res.data.resources.map(
          (img) =>
            `https://res.cloudinary.com/ddbuiilei/image/upload/q_auto/w_auto/${img.public_id}.${img.format}`
        )
        setClientsLogos(logos)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <Layout>
      <SEO title="Home" />

      <Styled.Main>
        <VideoSection
          fullVideo={MainVideo}
          previewVideo={MainVideoPreview}
          mobileImg={'./images/sobre.png'}
        />
        {/* <div className="section-image"></div> */}

        <Styled.About>
          <Title text={pageContent.empresa.title} />
          <div className="about-container">
            <div className="text-wrapper">
              <h3
                data-sal="slide-up"
                data-sal-easing="ease"
                data-sal-duration="600"
              >
                {pageContent.empresa.subTitle}
              </h3>
              <Text
                data-sal="slide-up"
                data-sal-delay="250"
                data-sal-duration="700"
                data-sal-easing="ease"
                dangerouslySetInnerHTML={{ __html: pageContent.empresa.text }}
              />

              <CtaLink
                text={pageContent.empresa.button}
                url="/empresa"
                className="mbl"
              />
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="250"
              data-sal-easing="ease"
              data-sal-duration="700"
            >
              <img src={pageContent.empresa.img} alt="Autopeças" />
              <CtaLink
                text={pageContent.empresa.button}
                url="/empresa"
                className="desktop"
              />
            </div>
          </div>
        </Styled.About>

        <Styled.Clients>
          <div
            className="banner"
            style={{ backgroundImage: `url(${pageContent.marcas.img})` }}
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            <h2>{pageContent.marcas.text}</h2>
          </div>
          <Title
            text={pageContent.marcas.title}
            light
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="600"
          />
          <ImageCarousel images={clientsLogos} alt="Client logo" />
        </Styled.Clients>

        {post && (
          <Styled.Blog>
            <Title text="Blogue" />
            <div className="wrapper">
              <h4 className="mbl">{post.title}</h4>
              <img src={post.imgBanner} alt={post.title} className="banner-homepage"/>
              <div className="text">
                <div>
                  <h4 className="desktop">{post.title}</h4>
                  <p>{post.description}</p>
                </div>
                <CtaLink
                  text={pageContent.blog.button}
                  url={post.path}
                  className="cta"
                />
              </div>
            </div>
          </Styled.Blog>
        )}

        <Styled.Contact>
          <ContactForm withToggle content={formContent} />
        </Styled.Contact>
      </Styled.Main>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
    ) {
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
    contentJson {
      home {
        empresa {
          title
          subTitle
          text
          img
          button
        }
        marcas {
          title
          text
          img
        }
        blog {
          title
          button
        }
      }
      formularios {
        toggle
        input1
        input2
        input3
        input4
        select
        textarea
        checkbox1
        checkbox2
        button
      }
    }
  }
`
