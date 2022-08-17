import { Amplify } from 'aws-amplify'
import { DataStore, initSchema } from '@aws-amplify/datastore'
import { createGlobalStyle } from 'styled-components'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import awsExports from '../aws-exports'
import { AnimalsModel } from 'src/models'

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
  Amplify.configure({ ...awsExports, ssr: true })

  if (typeof window !== undefined) {
    initSchema(require('../models/schema').schema)

    DataStore.start()
      .then(() => console.log('DataStore started'))
      .catch((err) => console.error('DataStore error', err))
  }

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
