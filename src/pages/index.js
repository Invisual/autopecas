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

const IndexPage = () => {
  const logos = [
    './images/logos/1.svg',
    './images/logos/2.svg',
    './images/logos/3.svg',
    './images/logos/4.svg',
    './images/logos/5.svg',
    './images/logos/6.svg',
    './images/logos/7.svg',
    './images/logos/8.svg',
    './images/logos/9.svg',
    './images/logos/10.svg',
    './images/logos/11.svg',
    './images/logos/12.svg',
    './images/logos/13.svg',
    './images/logos/14.svg',
    './images/logos/15.svg',
    './images/logos/16.svg',
    './images/logos/17.svg',
  ]

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
          <ImageCarousel images={logos} alt="Client logo" />
        </Styled.Clients>

        <Styled.Blog>
          <Title text="Blogue" />
          <div className="wrapper">
            <h4 className="mbl">AUTOPEÇAS.PT - Uma Nova Identidade</h4>
            <img src="./images/blog.png" alt="Nova identidade" />
            <div className="text">
              <div>
                <h4 className="desktop">AUTOPEÇAS.PT - Uma Nova Identidade</h4>
                <p>
                  A APG - Auto Peças Gafanha da Nazaré denomina-se agora de
                  Autopeças.pt
                </p>
              </div>
              <CtaLink text="saber mais" url="/blog" className="cta" />
            </div>
          </div>
        </Styled.Blog>

        <Styled.Contact>
          <ContactForm withToggle />
        </Styled.Contact>
      </Styled.Main>
    </Layout>
  )
}

export default IndexPage
