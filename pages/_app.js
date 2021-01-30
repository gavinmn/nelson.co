import "@/styles/fonts.css"

import { GlobalStyle } from "@/components/globalstyle"

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
