import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ChevronIcon from '../assets/images/chevron.svg'
import { Title } from '../components/Title'
import { Styled } from '../styles/recrutamento.styles'
import { FormContainer } from '../styles/form.styles'
import axios from 'axios'

const areaOptions = [
  {
    val: 'atendimento-client',
    label: 'Atendimento ao cliente / Call center',
  },
  { val: 'comerciais', label: 'Comerciais' },
  { val: 'distribuidores', label: 'Distribuidores' },
  { val: 'armazem', label: 'Armazém' },
]

const RecrutamentoPage = () => {
  const [area, setArea] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [fileName, setFileName] = useState('')
  const [isSent, setIsSent] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const clearAll = () => {
    setIsSent(false)
    setFeedbackMessage('')
    setArea('')
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setFileName('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    const areaName = areaOptions.find((ar) => ar.val === area).label || '-'
    formData.append('area', areaName)
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('message', message)
    formData.append('file', document.getElementById('file').files[0])

    axios
      .post('https://teste.invisual.pt/recruitment-form.php', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data; charset=UTF-8',
        },
      })
      .then((res) => {
        if (res.data === 'success') {
          setFeedbackMessage(
            'A sua candidatura foi enviada com sucesso! Vamos tentar responder o mais brevemente possível.'
          )
        } else {
          setFeedbackMessage(
            'Houve um erro ao enviar esta candidatura, por favor tente mais tarde.'
          )
        }
      })
      .catch((err) =>
        setFeedbackMessage(
          'Houve um erro ao enviar esta candidatura, por favor tente mais tarde.'
        )
      )
      .finally(() => setIsSent(true))
  }

  useEffect(() => {
    let timer
    isSent && (timer = setTimeout(() => clearAll(), 5000))
    return () => clearTimeout(timer)
  }, [isSent])

  return (
    <Layout>
      <SEO title="Recrutamento" />

      <Styled.Main>
        <Title light text="Bolsa de Emprego" />

        <FormContainer light className="form-container">
          {isSent && feedbackMessage ? (
            <p className="feedback-message">{feedbackMessage}</p>
          ) : (
            <form
              onSubmit={handleSubmit}
              method="POST"
              encType="multipart/form-data"
            >
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
                    <input
                      type="file"
                      name="file"
                      id="file"
                      accept="application/msword, text/plain, application/pdf"
                      onChange={(e) =>
                        setFileName(e.target.files.item(0)?.name || '')
                      }
                    />
                    <label htmlFor="file">
                      {fileName || 'Anexar currículo'}
                      <ChevronIcon />
                    </label>
                  </div>

                  <button>
                    Enviar <ChevronIcon />
                  </button>
                </div>
              </div>
            </form>
          )}
        </FormContainer>
      </Styled.Main>
    </Layout>
  )
}

export default RecrutamentoPage
