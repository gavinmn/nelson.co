import Head from "next/head"
import config from "../config"

export default function SEO({ description, title }) {
  const siteTitle = config.title

  return (
    <Head>
      <title>{`${title}${siteTitle}`}</title>
      <meta name="description" content={config.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:site_name" content={config.siteTitle} />
      <meta
        property="og:image"
        content="https://gnelson.me/images/meta/og.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="twitter:image"
        content="https://gnelson.me/images/meta/og.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content="gnelson.me" />
      <meta property="twitter:description" content={config.description} />
      <link
        href="https://gnelson.me/images/meta/favicon-180.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="https://gnelson.me/images/meta/favicon-32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="https://gnelson.me/images/meta/favicon-16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link
        href="https://gnelson.me/images/meta/favicon-48.png"
        rel="icon"
        sizes="48x48"
        type="image/png"
      />
    </Head>
  )
}
