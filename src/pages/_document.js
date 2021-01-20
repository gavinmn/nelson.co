import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/soehne-web-buch-kursiv.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />

          <link
            rel="preload"
            href="/fonts/soehne-web-buch.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />

          <link
            rel="preload"
            href="/fonts/soehne-web-dreiviertelfett.woff2"
            as="font"
            type="font/woff2"
            crossorigin
          />

          <link rel="dns-prefetch" href="https://gumroad.com/l/dvctd" />
          <link rel="preconnect" href="https://vitals.vercel-insights.com" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
