import React, { useState } from 'react'
import ChevronIcon from '../assets/images/chevron.svg'
import ChevronLightIcon from '../assets/images/chevron-thin.svg'
import { FormContainer } from '../styles/form.styles'

export const ContactForm = ({ withToggle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const showForm = withToggle ? isOpen : true

  const handleSubmit = () => {}

  return (
    <FormContainer className="contact-form" isOpen={isOpen}>
      {withToggle && (
        <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
          <span>Podemos ajudar?</span>
          <ChevronLightIcon />
        </div>
      )}

      {showForm && (
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
                  Aceito partilhar o meu nome, telefone e endereço de email para
                  os fins mencionados
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
      )}
    </FormContainer>
  )
}
