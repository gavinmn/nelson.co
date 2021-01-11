

// import React from "react"
// import PropTypes from "prop-types"
// import { Helmet } from "react-helmet"

// function SEO({ description, lang, meta, title, image }) {
//   const { site } = useStaticQuery(
//     graphql`
//       query {
//         site {
//           siteMetadata {
//             title
//             description
//             author
//             siteUrl
//             image
//           }
//         }
//       }
//     `
//   )

//   const metaDescription = description || site.siteMetadata.description

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

// SEO.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
//   image: PropTypes.shape({
//     src: PropTypes.string.isRequired,
//     height: PropTypes.number.isRequired,
//     width: PropTypes.number.isRequired,
//   }),
// }

// export default SEO
