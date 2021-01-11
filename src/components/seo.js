// import React from "react"
// import { Helmet } from "react-helmet"
//
// function SEO({ description, lang, meta, title, image }) {
//   // const { site } = useStaticQuery(
//   //   graphql`
//   //     query {
//   //       site {
//   //         siteMetadata {
//   //           title
//   //           description
//   //           author
//   //           siteUrl
//   //           image
//   //         }
//   //       }
//   //     }
//   //   `
//   // )
//
//   const metaDescription = description || site.siteMetadata.description
//
//   return (
//     <Helmet
//       htmlAttributes={{
//         lang,
//       }}
//       title={title}
//       titleTemplate={`%s${site.siteMetadata.title}`}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary_large_image`,
//         },
//         {
//           name: `twitter:creator`,
//           content: `${site.siteMetadata.author}`,
//         },
//         {
//           name: `twitter:title`,
//           content: `Gavin Nelson Design`,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//         {
//           name: `twitter:image`,
//           content: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
//         },
//         {
//           property: "og:image",
//           content: `${site.siteMetadata.siteUrl}${site.siteMetadata.image}`,
//         },
//         {
//           property: "og:image:width",
//           content: `1200`,
//         },
//         {
//           property: "og:image:height",
//           content: `630`,
//         },
//         {
//           name: "twitter:card",
//           content: "summary_large_image",
//         },
//       ]}
//     />
//   )
// }
//
// export default SEO

// src/components/seo.js

import Head from "next/head"
import config from "../config"

export default function SEO({ description, title }) {
  const siteTitle = config.title

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Head>
  )
}
