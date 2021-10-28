import * as React from 'react'
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

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const post = parseBlogPosts(edges)[0]

  const clientLogos = [...Array(17).keys()].map(
    (i) => `./images/logos/${i + 1}.svg`
  )

  return (
    <Layout>
      <SEO title="Home" />

      <Styled.Main>
        {/* <VideoSection
          fullVideo={MainVideo}
          previewVideo={MainVideoPreview}
          mobileImg={'./images/sobre.png'}
        /> */}
        <div className="section-image"></div>

        <Styled.About>
          <Title text="Empresa" />
          <div className="about-container">
            <div className="text-wrapper">
              <h3>Agora somos: a AUTOPEÇAS.PT.</h3>
              <Text>
                Com 25 anos de experiência no setor, somos uma incubadora de
                soluções para as empresas do Grupo Trustauto, colocando no
                mercado ferramentas competitivas e diferenciadoras,
                proporcionando meios efetivamente úteis às oficinas de
                reparação.
                <br />
                <br /> A nossa missão é evoluir e assegurar um serviço de
                excelência aos nossos clientes, privilegiando a interação e o
                uso de recursos e tecnologias inovadoras.
              </Text>

              <CtaLink text="saber mais" url="/empresa" className="mbl" />
            </div>
            <div>
              <img src="./images/sobre.png" alt="Autopeças" />
              <CtaLink text="saber mais" url="/empresa" className="desktop" />
            </div>
          </div>
        </Styled.About>

        <Styled.Clients>
          <Title text="Marcas Premium" light />
          <ImageCarousel images={clientLogos} alt="Client logo" />
        </Styled.Clients>

        {post && (
          <Styled.Blog>
            <Title text="Blogue" />
            <div className="wrapper">
              <h4 className="mbl">{post.title}</h4>
              <img src={post.img} alt={post.title} />
              <div className="text">
                <div>
                  <h4 className="desktop">{post.title}</h4>
                  <p>{post.description}</p>
                </div>
                <CtaLink text="saber mais" url={post.path} className="cta" />
              </div>
            </div>
          </Styled.Blog>
        )}

        <Styled.Contact>
          <ContactForm withToggle />
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
            img
            status
            description
          }
        }
      }
    }
  }
`
