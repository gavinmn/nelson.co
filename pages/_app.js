import * as React from "react"
import "../styles/fonts.css"
import { MDXProvider } from "@mdx-js/react"
import MarkdownComponents from "@/components/markdowncomponents"

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MarkdownComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
