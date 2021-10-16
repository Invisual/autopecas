import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        // Remove the blue highlight everytime we click on something on mobile
        -webkit-tap-highlight-color: transparent;
    }

    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
`
