import * as React from "react"
import "../styles/fonts.css"
import { MDXProvider } from "@mdx-js/react"
import MDXComponents from "@/components/mdxcomponents"

export default function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
