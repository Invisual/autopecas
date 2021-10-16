import React from 'react'
import { GlobalStyle } from '../styles/globalstyles'
import { theme } from '../styles/theme'
import styled, { ThemeProvider } from 'styled-components'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StyledLayout>{children}</StyledLayout>
  </ThemeProvider>
)

export default Layout

const StyledLayout = styled.div``
