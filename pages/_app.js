import "@/styles/fonts.css"
import "@/styles/global.css"
import { GlobalStyle } from "@/components/globalstyle"
import { MDXProvider } from "@mdx-js/react"

import { ThemeProvider } from "styled-components"
import Theme from "@/styles/theme"

import MarkdownComponents from "@/components/markdowncomponents"

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <MDXProvider components={MarkdownComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  )
}
