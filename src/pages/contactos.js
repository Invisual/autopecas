import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { IntroSection } from '../components/IntroSection'
import { ContactForm } from '../components/ContactForm'
import { Title } from '../components/Title'
import { Styled } from '../styles/contactos.styles'
import { graphql } from 'gatsby'

const ContactosPage = ({
  data: {
    contentJson: { contactos: pageContent, formularios: formContent },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="Contactos"
        description="AUTOPEÇAS.PT - Saiba onde nos encontrar e como nos contactar."
      />

      <Styled.Main>
        <Styled.Intro
          image={pageContent.img}
          mobileImage={pageContent.imgMobile}
        >
          <IntroSection
            text={pageContent.title}
            image={pageContent.img}
            fontSize="7.6rem"
            lineHeight="8.7rem"
            letterSpacing="0.76rem"
          />
        </Styled.Intro>

        <Styled.Info>
          <Title text={pageContent.sectionTitle} />
          <div
            className="contact-info"
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="600"
          >
            <p>
              <a href={`mailto:${pageContent.email1}`}>{pageContent.email1}</a>
            </p>
            <p>
              <a href={`mailto:${pageContent.phone.replace(/\s/g, '')}`}>
                {pageContent.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${pageContent.email2}`}>{pageContent.email2}</a>
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
            <Title text={pageContent.formTitle} />
            <ContactForm content={formContent} />
          </Styled.Contact>
        </Styled.Info>
      </Styled.Main>
    </Layout>
  )
}

export default ContactosPage

export const pageQuery = graphql`
  query {
    contentJson {
      contactos {
        title
        img
        imgMobile
        sectionTitle
        email1
        email2
        phone
        formTitle
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
        file
        mandatoryFields
        defaultArea
        button
      }
    }
  }
`
