import React, { useState, useEffect } from 'react'
import { LoadingSpinner } from './LoadingSpinner'
import { BigButton } from './BigButton'
import ChevronIcon from '../assets/images/chevron.svg'
import { FormContainer } from '../styles/form.styles'
import axios from 'axios'

export const ContactForm = ({ withToggle, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [messageClass, setMessageClass] = useState('')

  const showForm = withToggle ? isOpen : true

  const clearAll = () => {
    setIsSent(false)
    setFeedbackMessage('')
    setMessageClass('')
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
      .post('https://autopecas.pt/contact-form.php', formData, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data; charset=UTF-8',
        },
      })
      .then((res) => {
        if (res.data === 'success') {
          typeof window !== 'undefined' &&
            window.gtag('event', 'Submit', {
              event_category: 'Formulário Contacto',
              event_label: 'Contacto',
            })
          setFeedbackMessage(
            'A sua mensagem foi enviada com sucesso! Vamos tentar responder o mais brevemente possível.'
          )
          setMessageClass('contact-form-success')
        } else {
          setFeedbackMessage(
            'Houve um erro ao enviar esta mensagem, por favor tente mais tarde.'
          )
          setMessageClass('contact-form-error')
        }
      })
      .catch((err) => {
        console.log('err', err)
        setFeedbackMessage(
          'Houve um erro ao enviar esta mensagem, por favor tente mais tarde.'
        )
        setMessageClass('contact-form-error')
      })
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
    <FormContainer
      className="contact-form"
      isOpen={isOpen}
      data-sal="fade"
      data-sal-easing="ease"
      data-sal-duration="600"
      data-sal-delay="200"
    >
      {withToggle && (
        <BigButton
          text={content.toggle}
          onClick={() => setIsOpen(!isOpen)}
          className="toggle"
          isOpen={isOpen}
        />
      )}

      {isLoading ? (
        <LoadingSpinner />
      ) : isSent && feedbackMessage ? (
        <p className={`feedback-message ${messageClass}`}>{feedbackMessage}</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={showForm ? 'animated show' : 'animated'}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={content.input1}
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={content.input2}
            required
          />
          <div className="flex">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={content.input3}
            />
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={content.input4}
              required
            />
          </div>
          <textarea
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={content.textarea}
            required
          />
          <div className="flex checkboxes">
            <div>
              <label>
                <input type="checkbox" required />{' '}
                <span>{content.checkbox1}</span>
              </label>
              <label>
                <input type="checkbox" required />{' '}
                <span>{content.checkbox2}</span>
              </label>
            </div>

            <div className="buttons">
              <button>
                {content.button} <ChevronIcon />
              </button>
            </div>
          </div>
        </form>
      )}
    </FormContainer>
  )
}
