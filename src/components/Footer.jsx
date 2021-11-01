import React, { useState, useEffect } from 'react'
import Logo from '../assets/images/logo.svg'
import FacebookIcon from '../assets/images/facebook.svg'
import InstagramIcon from '../assets/images/instagram.svg'
import LinkedinIcon from '../assets/images/linkedin.svg'
import ChevronIcon from '../assets/images/chevron.svg'
import styled from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { Link, StaticQuery, graphql } from 'gatsby'

export const Footer = () => {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    addToMailchimp(email).then(({ result }) => {
      setSuccess(result === 'success')
      setEmail('')
    })
  }

  useEffect(() => {
    let timer
    success && (timer = setTimeout(() => setSuccess(), 5000))
    return () => clearTimeout(timer)
  }, [success])

  return (
    <StaticQuery
      query={graphql`
        query {
          contentJson {
            footer {
              address
              clientSupport
              email1
              email2
              privacyPolicy
              privacyPolicyUrl
              complaintsBook
              complaintsBookUrl
              facebookUrl
              instagramUrl
              linkedinUrl
              newsletter
              emailInput
              createdBy
            }
          }
        }
      `}
      render={({ contentJson: { footer: pageContent } }) => (
        <StyledFooter>
          <div className="footer__container">
            <div className="footer__item">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="footer__item">
              <p dangerouslySetInnerHTML={{ __html: pageContent.address }} />
              <p>
                {pageContent.clientSupport}
                <br />
                <a href={`mailto:${pageContent.email1}`}>
                  {pageContent.email1}
                </a>{' '}
                |
                <a href={`mailto:${pageContent.email2}`}>
                  {pageContent.email2}
                </a>
              </p>
            </div>

            <div className="footer__item footer__links">
              <Link to={pageContent.privacyPolicyUrl}>
                {pageContent.privacyPolicy}
              </Link>
              <a
                href={pageContent.complaintsBookUrl}
                target="_blank"
                rel="noopener"
              >
                {pageContent.complaintsBook}
              </a>
            </div>

            <div className="footer__item">
              <div className="social-icons">
                <a
                  href={pageContent.facebookUrl}
                  target="_blank"
                  rel="noopener"
                >
                  <FacebookIcon />
                </a>
                <a href={pageContent.instagramUrl}>
                  <InstagramIcon />
                </a>
                <a href={pageContent.linkedinUrl}>
                  <LinkedinIcon />
                </a>
              </div>

              <div className="newsletter">
                <p>{pageContent.newsletter}</p>
                {success === true ? (
                  <p>Obrigado por subscrever!</p>
                ) : success === false ? (
                  <p>Ocorreu um erro, tente de novo.</p>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="email"
                      placeholder={pageContent.emailInput}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button>
                      <ChevronIcon />
                    </button>
                  </form>
                )}
              </div>
            </div>

            <span className="created">{pageContent.createdBy}</span>
          </div>
        </StyledFooter>
      )}
    />
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
