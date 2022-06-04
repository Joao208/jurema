import Head from 'next/head'

export const DefaultHead = () => {
  return (
    <>
      <Head>
        <title>Projeto Jurema</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
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
          name="image"
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content="/henrique.jpg"
        />
        <meta
          name="description"
          content="Adote um animal de estimação e torne o mundo um lugar mais aconchegante."
          key="desc"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content="Projeto Jurema"
          key="title"
        />
        <meta
          property="og:description"
          content="Adote um animal de estimação e torne o mundo um lugar mais aconchegante."
        />
        <link rel="manifest" href="" />
        <meta name="keywords" content="projeto, animal, ajuda, jurema" />
        <meta name="author" content="joao208 and coutinhomm" />
      </Head>
    </>
  )
}
