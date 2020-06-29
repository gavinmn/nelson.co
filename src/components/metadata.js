import React from "react"
import Helmet from "react-helmet"

const Metadata = () => (
  <div>
    <Helmet>
      meta=
      {[
        {
          name: `description`,
          content: `Monterey, a macOS Big Sur icon theme by Gavin Nelson`,
        },
        {
          property: `og:title`,
          content: `Monterey Icon Theme`,
        },
        {
          property: `og:description`,
          content: `Monterey, a macOS Big Sur icon theme by Gavin Nelson`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: `@gavmn`,
        },
        {
          name: `twitter:title`,
          content: `Monterey Icon Theme`,
        },
        {
          name: `twitter:description`,
          content: `Monterey, a macOS Big Sur icon theme by Gavin Nelson`,
        },
        {
          name: `twitter:image`,
          content: "https://gnelsondesign.com/images/montereyog.png",
        },
        {
          property: "og:image",
          content: "https://gnelsondesign.com/images/montereyog.png",
        },
        {
          property: "og:image:width",
          content: `1200`,
        },
        {
          property: "og:image:height",
          content: `630`,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ]}
    </Helmet>
  </div>
)

export default Metadata
