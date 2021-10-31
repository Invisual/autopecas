import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { IntroSection } from '../components/IntroSection'
import { ContactForm } from '../components/ContactForm'
import { Title } from '../components/Title'
import { Styled } from '../styles/contactos.styles'

const ContactosPage = () => {
  const introText = (
    <>
      Zona Industrial <span>da Mota</span>
      <br />
      <span>Rua 6</span> Lote 9-A9
      <br />
      3830-572
      <br />
      <span>Gafanha da</span>
      <br />
      <span>Encarnação</span>
    </>
  )

  return (
    <Layout>
      <SEO title="Contactos" />

      <Styled.Main>
        <Styled.Intro>
          <IntroSection
            text={introText}
            image="https://res.cloudinary.com/ddbuiilei/image/upload/q_auto/w_auto/f_auto/v1635610371/contactos_mywxy6.jpg"
            fontSize="5.8rem"
            lineHeight="8rem"
            letterSpacing="0.58rem"
            topLineWidth="20rem"
            topLineSpacing="-3.5rem"
          />
        </Styled.Intro>

        <Styled.Info>
          <Title text="Contactos" />
          <div
            className="contact-info"
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            <p>
              <a href="mailto:comercial@autopecas.pt">comercial@autopecas.pt</a>
            </p>
            <p>
              <a href="tel:+351234397700">+351 234 397 700</a>
            </p>
            <p>
              <a href="mailto:geral@autopecas.pt">geral@autopecas.pt</a>
            </p>
          </div>

          <div className="map">
            <iframe
              src="https://snazzymaps.com/embed/349151"
              width="100%"
              height="600px"
            ></iframe>
          </div>

          <Styled.Contact>
            <Title text="Precisa de ajuda?" />
            <ContactForm />
          </Styled.Contact>
        </Styled.Info>
      </Styled.Main>
    </Layout>
  )
}

export default ContactosPage
