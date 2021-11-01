import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ChevronIcon from '../assets/images/chevron.svg'
import { Title } from '../components/Title'
import { LoadingSpinner } from '../components/LoadingSpinner'
import { Styled } from '../styles/recrutamento.styles'
import { FormContainer } from '../styles/form.styles'
import axios from 'axios'
import { graphql } from 'gatsby'

const areaOptions = [
  {
    val: 'atendimento-client',
    label: 'Atendimento ao cliente / Call center',
  },
  { val: 'comerciais', label: 'Comerciais' },
  { val: 'distribuidores', label: 'Distribuidores' },
  { val: 'armazem', label: 'Armazém' },
]

const RecrutamentoPage = ({
  data: {
    contentJson: { recrutamento: pageContent, formularios: formContent },
  },
}) => {
  const [area, setArea] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [fileName, setFileName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
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
    setIsLoading(true)

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
      .finally(() => {
        setIsLoading(false)
        setIsSent(true)
      })
  }

  useEffect(() => {
    let timer
    isSent && (timer = setTimeout(() => clearAll(), 5000))
    return () => clearTimeout(timer)
  }, [isSent])

  return (
    <Layout>
      <SEO
        title="Recrutamento"
        description="AUTOPEÇAS.PT - Aceitamos candidaturas para vir trabalhar connosco. Veja as vagas que temos em aberto."
      />

      <Styled.Main>
        <Title light text={pageContent.title} />

        <FormContainer light className="form-container">
          {isLoading ? (
            <LoadingSpinner light />
          ) : isSent && feedbackMessage ? (
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
                  {formContent.defaultArea}
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
                placeholder={formContent.input1 + '*'}
                required
              />
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={formContent.input2 + '*'}
                  required
                  style={{ width: '60%' }}
                />

                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={formContent.input3}
                  style={{ width: '30%' }}
                />
              </div>
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={formContent.textarea}
                required
              />

              <p className="footnote">{formContent.mandatoryFields}</p>

              <div className="flex checkboxes">
                <div>
                  <label>
                    <input type="checkbox" required />{' '}
                    <span>{formContent.checkbox1}</span>
                  </label>
                  <label>
                    <input type="checkbox" required />{' '}
                    <span>{formContent.checkbox2}</span>
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
                      {fileName || formContent.file}
                      <ChevronIcon />
                    </label>
                  </div>

                  <button>
                    {formContent.button} <ChevronIcon />
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

export const pageQuery = graphql`
  query {
    contentJson {
      recrutamento {
        title
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
