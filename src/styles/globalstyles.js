import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;

        
    }

    body {
        font-family: ${({ theme }) => theme.fontFamily};
        background-color: ${({ theme }) => theme.lightBackground};
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input, input:focus, input:active {
        outline: none;
        border: none;
    }

    input, textarea {
        font-family: ${({ theme }) => theme.fontFamily};
    }

    section {
        padding: ${({ theme }) => `${theme.spacingXL} ${theme.spacingM}`};
    }

    @media screen and (max-width: 600px) {
        section {
        padding: ${({ theme }) => `${theme.spacingXL} ${theme.spacingS}`};
        }
    }

    @media screen and (max-width: 350px) {
        section {
        padding: ${({ theme }) => `${theme.spacingXL} ${theme.spacingXS}`};
        }
    }

    // "Mobile only" and "Desktop only"
    .mbl {
        display: none;
    }

    .desktop {
        display: block;
    }

    @media screen and (max-width: 1000px) {
        html {
            font-size: 58%;
        }

        .mbl {
        display: block;
        }

        .desktop {
        display: none;
        }
    }

`
