import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { IntroSection } from '../components/IntroSection'
import { Text } from '../components/Text'
import { ContactForm } from '../components/ContactForm'
import { Styled } from '../styles/empresa.styles'
import { graphql } from 'gatsby'

const EmpresaPage = ({
  data: {
    contentJson: { empresa: pageContent, formularios: formContent },
  },
}) => {
  return (
    <Layout>
      <SEO
        title="Empresa"
        description="AUTOPEÇAS.PT - Fundada em 1996 em Aveiro, contamos com 25 anos de atividade."
      />

      <Styled.Main>
        <Styled.Intro
          image={pageContent.img}
          mobileImage={pageContent.imgMobile}
        >
          <IntroSection
            text={pageContent.title}
            fontSize="7.6rem"
            lineHeight="8.7rem"
            letterSpacing="0.76rem"
          />
        </Styled.Intro>

        <Styled.Timeline>
          <div className="item">
            <div className="image-wrapper">
              <img
                src={pageContent.timeline1.img}
                alt={pageContent.timeline1.year}
              />
              <h3 className="year-right">{pageContent.timeline1.year}</h3>
            </div>
            <Text
              className="right-bottom"
              dangerouslySetInnerHTML={{ __html: pageContent.timeline1.text }}
            />
          </div>

          <div className="item right centered-year">
            <Text
              className="left-center"
              dangerouslySetInnerHTML={{ __html: pageContent.timeline2.text }}
            />
            <div className="image-wrapper">
              <img
                src={pageContent.timeline2.img}
                alt={pageContent.timeline2.year}
              />
            </div>
            <h3 className="year-centered">{pageContent.timeline2.year}</h3>
          </div>

          <div className="item">
            <div className="image-wrapper">
              <img
                src={pageContent.timeline3.img}
                alt={pageContent.timeline3.year}
              />
              <h3 className="year-right">{pageContent.timeline3.year}</h3>
            </div>
            <Text
              className="right-bottom"
              dangerouslySetInnerHTML={{ __html: pageContent.timeline3.text }}
            />
          </div>

          <div className="item right">
            <Text
              className="left-bottom"
              dangerouslySetInnerHTML={{ __html: pageContent.timeline4.text }}
            />
            <div className="image-wrapper">
              <img
                src={pageContent.timeline4.img}
                alt={pageContent.timeline4.year}
              />
              <h3 className="year-left">{pageContent.timeline4.year}</h3>
            </div>
          </div>

          <div className="item centered-year">
            <div className="image-wrapper">
              <img
                src={pageContent.timeline5.img}
                alt={pageContent.timeline5.year}
              />
            </div>
            <h3 className="year-centered">{pageContent.timeline5.year}</h3>
            <Text
              className="right-center"
              dangerouslySetInnerHTML={{ __html: pageContent.timeline5.text }}
            />
          </div>
        </Styled.Timeline>

        <Styled.Counters
          image={pageContent.numbersImg}
          imageMobile={pageContent.numbersImgMobile}
        >
          <h2 dangerouslySetInnerHTML={{ __html: pageContent.numbersText }} />
          <div className="counter">
            <h3>{pageContent.numbers1.value}</h3>
            <Text>{pageContent.numbers1.label}</Text>
          </div>

          <div className="counter">
            <h3>{pageContent.numbers2.value}</h3>
            <Text>{pageContent.numbers2.label}</Text>
          </div>

          <div className="counter">
            <h3>{pageContent.numbers3.value}</h3>
            <Text>{pageContent.numbers3.label}</Text>
          </div>
        </Styled.Counters>

        <Styled.Contact>
          <ContactForm withToggle content={formContent} />
        </Styled.Contact>
      </Styled.Main>
    </Layout>
  )
}

export default EmpresaPage

export const pageQuery = graphql`
  query {
    contentJson {
      empresa {
        title
        img
        imgMobile
        timeline1 {
          year
          img
          text
        }
        timeline2 {
          year
          img
          text
        }
        timeline3 {
          year
          img
          text
        }
        timeline4 {
          year
          img
          text
        }
        timeline5 {
          year
          img
          text
        }
        numbersImg
        numbersImgMobile
        numbersText
        numbers1 {
          value
          label
        }
        numbers2 {
          value
          label
        }
        numbers3 {
          value
          label
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
