import Document, { Html, Head, Main, NextScript } from 'next/document'
// import  logo from '../../public/Image/logo_blanco_favicon.png'
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="ofimedia-icon"
            sizes="32x32"
            href="../../public/Image/logo_blanco_favicon.png"
          />
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
