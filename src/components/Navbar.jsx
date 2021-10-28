import React, { useState } from 'react'
import Logo from '../assets/images/logo.svg'
import MobileLogo from '../assets/images/mobile-logo.svg'
import Badge from '../assets/images/badge.svg'
import LogoTrust from '../assets/images/logo-trust.svg'
import HamburguerIcon from '../assets/images/hamburguer.svg'
import CloseMenuIcon from '../assets/images/close-menu.svg'
import UserIcon from '../assets/images/user.svg'
import styled from 'styled-components'
import { Link } from 'gatsby'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledNav isOpen={isOpen}>
      <div className="nav__container">
        <Badge className="badge" />
        <div className="nav__item client-area">
          <a
            href="https://autopecas.pt/wp-login.php?redirect_to=https%3A%2F%2Fautopecas.pt%2Farea-de-clientes"
            target="_blank"
          >
            <UserIcon />
            Área Cliente
          </a>
        </div>
        <div className="nav__item">
          <div className="items">
            <Link to="/empresa">Empresa</Link>
            <Link to="/recrutamento">Recrutamento</Link>
            <Link to="/" className="nav__logo-container">
              <Logo className="nav__logo" />
            </Link>
            <Link to="/blog">Blogue</Link>
            <Link to="/contactos">Contactos</Link>
          </div>
        </div>
        <div className="nav__item logo-trust">
          <a
            href="https://laranja2016.wixsite.com/trustconstrucao/"
            target="_blank"
          >
            <LogoTrust />
          </a>
        </div>
      </div>

      {!isOpen && (
        <Link to="/">
          <MobileLogo className="nav__mobile-logo mbl" />
        </Link>
      )}

      {isOpen ? (
        <CloseMenuIcon
          className="nav__toggle close mbl"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <HamburguerIcon
          className="nav__toggle mbl"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacingXS} ${({ theme }) => theme.spacingL};
  background: ${({ theme }) => theme.darkBackground};
  color: ${({ theme }) => theme.lightText};
  z-index: 1;

  .nav__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav__item {
    font-weight: ${({ theme }) => theme.fontBold};
    color: ${({ theme }) => theme.lightText};
    text-transform: uppercase;
  }

  .client-area a {
    display: flex;
    align-items: center;
    font-size: 1rem;

    svg {
      width: 1.4rem;
      margin-right: 0.6rem;
    }
  }

  .items {
    display: flex;
    align-items: center;
    a {
      font-size: 1.6rem;
      margin: 0 4rem;
    }
  }

  .nav__toggle {
    position: absolute;
    right: ${({ theme }) => theme.spacingS};
    top: 50%;
    height: auto;
    width: 6.5rem;
    transform: translateY(-50%);
    padding: ${({ theme }) => theme.spacingXS};
    cursor: pointer;

    &.close {
      width: 6rem;
    }

    span {
      display: block;
      width: 3.2rem;
      height: 0.3rem;
      margin: 0.6rem 0;
      background-color: ${({ theme }) => theme.lightText};
      border-radius: 20px;
      &:nth-child(2) {
        width: 2rem;
      }
      &:nth-child(3) {
        width: 2.5rem;
      }
    }
  }

  .badge {
    visibility: hidden;
    position: absolute;
    left: -9999px;
  }

  @media screen and (max-width: 1600px) {
    padding: ${({ theme }) => theme.spacingXS} ${({ theme }) => theme.spacingM};
  }

  @media screen and (max-width: 1300px) {
    padding: ${({ theme }) => theme.spacingXS} ${({ theme }) => theme.spacingS};

    .items a {
      margin: 0 ${({ theme }) => theme.spacingS};
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 4rem;
    // Mobile
    .nav__container {
      height: ${(props) => (props.isOpen ? '100vh' : 0)};
      overflow: hidden;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: ${({ theme }) => theme.darkBackground};
      flex-direction: column;
      justify-content: center;
      padding: ${(props) => (props.isOpen ? `${props.theme.spacingS} 0` : 0)};
      transition: all 0.15s ease;

      .nav__item {
        margin-bottom: ${({ theme }) => theme.spacingL};
      }

      .items {
        flex-direction: column;

        a {
          margin: ${({ theme }) => theme.spacingS} 0;
          font-size: 2rem;
          letter-spacing: 0.2rem;
        }
      }

      .client-area {
        order: 1;

        a {
          font-size: 1.5rem;
        }
      }

      .logo-trust {
        display: none;
      }

      .badge {
        margin-bottom: ${({ theme }) => theme.spacingL};
        transform: scale(1.3);
        visibility: visible;
        position: unset;
      }
    }

    .nav__logo-container {
      position: absolute;
      left: -9999px;
      visibility: hidden;
      opacity: 0;
    }

    .nav__mobile-logo {
      width: 12rem;
      position: absolute;
      left: ${({ theme }) => theme.spacingS};
      top: 50%;
      transform: translateY(-50%);
    }
  }
`
