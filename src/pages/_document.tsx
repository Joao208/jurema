import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      const styles = [
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>,
      ]

      return {
        ...initialProps,
        styles: styles,
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="logo.png" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <meta
            name="theme-color"
            content="#000"
            media="(prefers-color-scheme: dark)"
          />
          <meta
            name="description"
            content="Checkout our cool page"
            key="desc"
          />
          <meta
            property="og:description"
            content="And a social description for our cool page"
          />
          <link rel="manifest" href="" />
          <meta name="keywords" content="projeto, animal, ajuda, jurema" />
          <meta name="author" content="joao208 and coutinhomm" />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}
