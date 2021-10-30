import React, { useState, useEffect } from 'react'
import { LoadingSpinner } from './LoadingSpinner'
import ChevronIcon from '../assets/images/chevron.svg'
import ChevronLightIcon from '../assets/images/chevron-thin.svg'
import { FormContainer } from '../styles/form.styles'
import axios from 'axios'

export const ContactForm = ({ withToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const showForm = withToggle ? isOpen : true

  const clearAll = () => {
    setIsSent(false)
    setFeedbackMessage('')
    setName('')
    setEmail('')
    setPhone('')
    setSubject('')
    setMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('phone', phone)
    formData.append('subject', subject)
    formData.append('message', message)

    axios
      .post('https://teste.invisual.pt/contact-form.php', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data; charset=UTF-8',
        },
      })
      .then((res) => {
        if (res.data === 'success') {
          setFeedbackMessage(
            'A sua mensagem foi enviada com sucesso! Vamos tentar responder o mais brevemente possível.'
          )
        } else {
          setFeedbackMessage(
            'Houve um erro ao enviar esta mensagem, por favor tente mais tarde.'
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
    <FormContainer className="contact-form" isOpen={isOpen}>
      {withToggle && (
        <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
          <span>Podemos ajudar?</span>
          <ChevronLightIcon />
        </div>
      )}

      {showForm &&
        (isLoading ? (
          <LoadingSpinner />
        ) : isSent && feedbackMessage ? (
          <p className="feedback-message">{feedbackMessage}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <div className="flex">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Telefone"
              />
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Assunto"
                required
              />
            </div>
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Mensagem"
              required
            />
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
                <button>
                  Enviar <ChevronIcon />
                </button>
              </div>
            </div>
          </form>
        ))}
    </FormContainer>
  )
}
