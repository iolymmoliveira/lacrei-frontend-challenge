'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: var(--font-nunito), sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.color.background.default};
    transition: 200ms;

    margin: 0 24px;
    height: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    max-width: 1100px;
  }

  main {
    margin-bottom: 24px;
    flex: 1;
  }

  a {
    color: ${({ theme }) => theme.color.text.accent};
    text-decoration: none;
    transition: 200ms;
  }
  
  a:visited {
    color: inherit;
  }


  @media screen and (min-width: 1124px) {
    body {
      margin: 0 auto;
    }
  }
`
