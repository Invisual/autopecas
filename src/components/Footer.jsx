import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import FacebookIcon from '../assets/images/facebook.svg'
import InstagramIcon from '../assets/images/instagram.svg'
import LinkedinIcon from '../assets/images/linkedin.svg'
import YoutubeIcon from '../assets/images/youtube.svg'
import ChevronIcon from '../assets/images/chevron.svg'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const Footer = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Lógica para newsletter aqui
    console.log(email)
    setEmail('')
  }

  return (
    <StyledFooter>
      <div className="footer__container">
        <div className="footer__item">
          <Logo />
        </div>
        <div className="footer__item">
          <p>
            Zona Industrial da Mota | Rua 6 Lote 9-A9
            <br />
            3830-527 Gafanha da Encarnação
          </p>
          <p>
            Apoio Cliente: +351 234 397 700
            <br />
            <a href="mailto:comercial@autopecas.pt">comercial@autopecas.pt</a> |
            <a href="mailto:geral@autopecas.pt">geral@autopecas.pt</a>
          </p>
        </div>

        <div className="footer__item footer__links">
          <Link to="/politicaprivacidade">Política de Privacidade</Link>
          <a href="https://www.livroreclamacoes.pt/inicio" target="_blank">
            Livro de Reclamações
          </a>
        </div>

        <div className="footer__item">
          <div className="social-icons">
            <Link to="/">
              <FacebookIcon />
            </Link>
            <Link to="/">
              <InstagramIcon />
            </Link>
            <Link to="/">
              <LinkedinIcon />
            </Link>
            <Link to="/">
              <YoutubeIcon />
            </Link>
          </div>

          <div className="newsletter">
            <p>Subscreva a nossa newsletter</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button>
                <ChevronIcon />
              </button>
            </form>
          </div>
        </div>

        <span className="created">Created: Invisual.pt</span>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  padding: 4.5rem ${({ theme }) => theme.spacingL};
  background: ${({ theme }) => theme.darkBackground};
  color: ${({ theme }) => theme.lightText};

  .footer__container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer__item {
    font-size: 1.2rem;
    line-height: 1.6rem;

    p:nth-child(2),
    a:not(:first-child) {
      margin-top: ${({ theme }) => theme.spacingXS};
    }
  }

  .footer__links a {
    display: block;
  }

  .social-icons a {
    svg {
      width: 1.2rem;
      margin-right: ${({ theme }) => theme.spacingXS};

      path {
        fill: ${({ theme }) => theme.lightText} !important;
      }
    }

    &:last-child svg {
      width: 1.6rem;
      margin-right: 0;
    }
  }

  .newsletter {
    margin-top: ${({ theme }) => theme.spacingXXS};

    form {
      position: relative;
      margin-top: ${({ theme }) => theme.spacingXXXS};

      input {
        width: 115%;
        background: transparent;
        color: ${({ theme }) => theme.grey};
        border-bottom: 1px solid ${({ theme }) => theme.lightText};
        padding: ${({ theme }) => theme.spacingXXS} 0;

        &::placeholder {
          color: ${({ theme }) => theme.grey};
          opacity: 1;
        }
      }

      button {
        position: absolute;
        background: transparent;
        border: none;
        right: -15%;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;

        svg {
          width: 0.8rem;
        }
      }
    }
  }

  .created {
    position: absolute;
    bottom: -2.5rem;
    right: -2.3rem;
    font-size: 0.7rem;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1000px) {
    // Mobile
    .footer__container {
      flex-direction: column;
      text-align: center;
      gap: ${({ theme }) => theme.spacingM};
    }
  }
`
