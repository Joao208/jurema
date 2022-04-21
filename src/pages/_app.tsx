import { createGlobalStyle } from 'styled-components'
import type { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    overflow: hidden
  }

  *::-webkit-scrollbar {
    width: 0px;
  }
`

function MyApp({ Component, pageProps }: AppProps) {
  const style = `
    font-size:400px;
    background:url(https://cdn-icons-png.flaticon.com/512/174/174857.png) no-repeat;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-size: 200px
  `

  console.log(
    'Powered by João Augusto (https://linkedin.com/in/joao208) and Mateus Coutinho (https://linkedin.com/in/coutinhomm)'
  )
  console.log('%c ', style)

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
