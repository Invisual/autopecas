import * as React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ChevronIcon from '../assets/images/chevron.svg'
import { Title } from '../components/Title'
import { Styled } from '../styles/recrutamento.styles'
import { FormContainer } from '../styles/form.styles'

const RecrutamentoPage = () => {
  const [area, setArea] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [message, setMessage] = React.useState('')

  const handleSubmit = () => {}

  const areaOptions = [
    {
      val: 'atendimento-client',
      label: 'Atendimento ao cliente / Call center',
    },
    { val: 'comerciais', label: 'Comerciais' },
    { val: 'distribuidores', label: 'Distribuidores' },
    { val: 'armazem', label: 'Armazém' },
  ]

  return (
    <Layout>
      <SEO title="Recrutamento" />

      <Styled.Main>
        <Title light text="Bolsa de Emprego" />

        <FormContainer light>
          <form onSubmit={handleSubmit}>
            <select
              required
              defaultValue={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="" disabled>
                Procuramos profissionais excelentes para as seguintes áreas
              </option>
              {areaOptions.map((area) => (
                <option key={area.val} value={area.val}>
                  {area.label}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome*"
              required
            />
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email*"
                required
                style={{ width: '60%' }}
              />

              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefone"
                style={{ width: '30%' }}
              />
            </div>
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem"
              required
            />

            <p className="footnote">* campos de preenchimento obrigatório</p>

            <div className="flex checkboxes">
              <div>
                <label>
                  <input type="checkbox" required />{' '}
                  <span>Li e aceito a Política de Privacidade</span>
                </label>
                <label>
                  <input type="checkbox" required />{' '}
                  <span>
                    Aceito partilhar o meu nome, telefone e endereço de email
                    para os fins mencionados
                  </span>
                </label>
              </div>

              <div className="buttons">
                <div className="file">
                  <input type="file" id="file" />
                  <label for="file">
                    Anexar currículo
                    <ChevronIcon />
                  </label>
                </div>

                <button>
                  Enviar <ChevronIcon />
                </button>
              </div>
            </div>
          </form>
        </FormContainer>
      </Styled.Main>
    </Layout>
  )
}

export default RecrutamentoPage
