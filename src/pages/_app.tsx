import { createGlobalStyle } from 'styled-components'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
  console.log(
    'Powered by João Augusto (https://linkedin.com/in/joao208) and Mateus Coutinho (https://linkedin.com/in/coutinhomm)'
  )

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}

export default MyApp
