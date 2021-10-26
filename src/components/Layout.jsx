import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { GlobalStyle } from '../styles/globalstyles'
import { theme } from '../styles/theme'
import styled, { ThemeProvider } from 'styled-components'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navbar />
    <StyledLayout>{children}</StyledLayout>
    <Footer />
  </ThemeProvider>
)

export default Layout

const StyledLayout = styled.div`
  min-height: calc(90vh - 40px);
`
