import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { IntroSection } from '../components/IntroSection'
import { Text } from '../components/Text'
import { ContactForm } from '../components/ContactForm'
import { Styled } from '../styles/empresa.styles'

const EmpresaPage = () => {
  const introText = (
    <>
      Fundada em <span>1996</span>
      <br />
      em <span>Aveiro</span> já
      <br />
      conta com
      <br />
      <span>25 anos</span> de
      <br />
      atividade
    </>
  )

  return (
    <Layout>
      <SEO title="Empresa" />

      <Styled.Main>
        <Styled.Intro>
          <IntroSection
            text={introText}
            image="https://res.cloudinary.com/ddbuiilei/image/upload/q_auto/w_auto/f_auto/v1635609908/sobre_uy974r.png"
            fontSize="7.6rem"
            lineHeight="8.7rem"
            letterSpacing="0.76rem"
          />
        </Styled.Intro>

        <Styled.Timeline>
          <div className="item">
            <div className="image-wrapper">
              <img
                src="https://res.cloudinary.com/ddbuiilei/image/upload/q_auto/w_auto/f_auto/v1635609913/timeline1_l7hicl.png"
                alt="2021"
              />
              <h3 className="year-right">2021</h3>
            </div>
            <Text className="right-bottom">
              Rebranding da marca:
              <br />A APG - Auto Peças Gafanha da Nazaré denomina-se agora de
              AUTOPEÇAS.PT
            </Text>
          </div>

          <div className="item right centered-year">
            <Text className="left-center">
              Autopeças é um dos membros fundadores e acionistas do Grupo
              TRUSTauto;
              <br />
              <br /> Mudança para o novo armazém de 5000 m2.
            </Text>
            <div className="image-wrapper">
              <img
                src="https://res.cloudinary.com/ddbuiilei/image/upload/q_auto/w_auto/f_auto/v1635609909/timeline2_lchvn1.png"
                alt="2017-2019"
              />
            </div>
            <h3 className="year-centered">2017-2019</h3>
          </div>

          <div className="item">
            <div className="image-wrapper">
              <img
                src="https://res.cloudinary.com/ddbuiilei/image/upload/q_auto/w_auto/f_auto/v1635609909/timeline3_owr7vi.png"
                alt="2015"
              />
              <h3 className="year-right">2015</h3>
            </div>
            <Text className="right-bottom">
              Novo Armazém;
              <br />
              Associado fundador da AD AfterMarket;
              <br />
              Empresa destacada consecutivamente pela Revista "TOP 100 - Maiores
              distribuidores do AfterMarket".
            </Text>
          </div>

          <div className="item right">
            <Text className="left-bottom">
              O Estatuto PME Líder é atribuído pelo IAPMEI;
              <br />
              Eleita "Top Associate to AD Portugal" - distingue a empresa
              mediante o Volume, Finanças e elevados padrões de Negócios AD.
            </Text>
            <div className="image-wrapper">
              <img
                src="https://res.cloudinary.com/ddbuiilei/image/upload/q_auto/w_auto/f_auto/v1635609908/timeline4_wembit.png"
                alt="2010"
              />
              <h3 className="year-left">2010</h3>
            </div>
          </div>

          <div className="item centered-year">
            <div className="image-wrapper">
              <img
                src="https://res.cloudinary.com/ddbuiilei/image/upload/q_auto/w_auto/f_auto/v1635609908/timeline5_pyf8wf.png"
                alt="2007-2009"
              />
            </div>
            <h3 className="year-centered">2007-2009</h3>
            <Text className="right-center">
              Nova loja e armazém;
              <br />
              Exportação para África;
              <br />
              Exportação para a União Europeia.
            </Text>
          </div>
        </Styled.Timeline>

        <Styled.Counters
          data-sal="slide-up"
          data-sal-easing="ease"
          data-sal-duration="600"
        >
          <div className="counter">
            <h3>+500mil</h3>
            <Text>Unidades vendidas por ano</Text>
          </div>

          <div className="counter">
            <h3>+30mil</h3>
            <Text>Referências vendidas por ano</Text>
          </div>

          <div className="counter">
            <h3>+40</h3>
            <Text>Marcas Premium</Text>
          </div>
        </Styled.Counters>

        <Styled.Contact>
          <ContactForm withToggle />
        </Styled.Contact>
      </Styled.Main>
    </Layout>
  )
}

export default EmpresaPage
