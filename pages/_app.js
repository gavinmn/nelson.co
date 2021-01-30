import * as React from "react"
import "../styles/fonts.css"

import { ThemeProvider } from "styled-components"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
