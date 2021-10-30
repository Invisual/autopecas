import styled from 'styled-components'

export const StyledPrivacyPolicy = styled.section`
  h2,
  .text {
    margin-top: ${({ theme }) => theme.spacingM};
  }

  ol {
    margin-left: ${({ theme }) => theme.spacingS};
  }
`
