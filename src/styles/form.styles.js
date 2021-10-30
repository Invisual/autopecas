import styled from 'styled-components'

export const FormContainer = styled.div`
  form {
    width: 75%;
    margin: ${({ theme }) => theme.spacingS} auto 0 auto;

    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;

      input {
        width: 45%;
      }
    }

    .checkboxes {
      margin-top: ${({ theme }) => theme.spacingXS};
      justify-content: flex-start;
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      margin-left: ${({ theme }) => theme.spacingL};
    }

    input,
    select,
    textarea {
      width: 100%;
      font-size: 1.8rem;
      color: ${(props) =>
        props.light ? props.theme.lightText : props.theme.darkSubTitle};
      background: transparent;
      margin-top: ${({ theme }) => theme.spacingM};
      padding: ${({ theme }) => theme.spacingXS} 0;
      border: none;
      border-bottom: 2px solid ${({ theme }) => theme.darkTitle};

      &::placeholder {
        color: ${(props) =>
          props.light ? props.theme.lightText : props.theme.darkTitle};
        font-size: 1.8rem;
        opacity: 1;
      }
    }

    label {
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: ${(props) =>
        props.light ? props.theme.lightText : props.theme.darkTitle};
      margin-top: ${({ theme }) => theme.spacingXXS};
      cursor: pointer;
    }

    input[type='checkbox'] {
      width: auto;
      margin: 0 ${({ theme }) => theme.spacingXXXS} 0 0;
    }

    .file {
      min-width: 17rem;
      border-bottom: 1px solid ${({ theme }) => theme.introTitle};
      padding: 0.9rem 0;

      input {
        opacity: 0;
        width: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
      }

      label {
        justify-content: space-between;
        font-size: 1.4rem;
        color: ${({ theme }) => theme.darkTitle};
        text-transform: lowercase;
      }

      svg {
        width: 0.7rem;
        stroke: ${(props) =>
          props.light ? props.theme.lightTitle : props.theme.darkText};
      }
    }

    button {
      min-width: 11rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      float: right;
      padding: 0.7rem 0;
      margin-top: ${({ theme }) => theme.spacingXXS};
      margin-left: auto;
      font-size: 1.4rem;
      line-height: 2.5rem;
      border: none;
      border-bottom: 1px solid;
      border-color: ${(props) =>
        props.light ? props.theme.lightTitle : props.theme.darkText};
      color: ${(props) =>
        props.light ? props.theme.lightTitle : props.theme.darkText};
      font-weight: ${({ theme }) => theme.fontBold};
      text-transform: uppercase;
      background: transparent;
      cursor: pointer;

      svg {
        width: 0.7rem;
        stroke: ${(props) =>
          props.light ? props.theme.lightTitle : props.theme.darkText};
      }
    }

    .footnote {
      font-size: 1.2rem;
      margin-top: ${({ theme }) => theme.spacingXXS};
      color: ${(props) =>
        props.light ? props.theme.lightText : props.theme.darkSubTitle};
    }
  }

  .loading {
    font-size: 0.7rem;
    margin-top: ${({ theme }) => theme.spacingXL};
  }

  .feedback-message {
    color: ${(props) =>
      props.light ? props.theme.lightText : props.theme.darkText};
    font-size: 1.8rem;
    line-height: 2.5rem;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacingL};
  }

  @media screen and (max-width: 1000px) {
    form {
      width: 95%;

      .flex {
        display: block;

        input:not([type='checkbox']) {
          width: 100% !important;
        }
      }

      .checkboxes {
        margin-top: ${({ theme }) => theme.spacingS};
      }

      .buttons {
        margin-top: ${({ theme }) => theme.spacingXL};
        margin-left: 0;
      }

      button {
        min-width: 20rem;
      }
    }
  }
`
