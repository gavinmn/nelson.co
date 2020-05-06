module.exports = {
  siteMetadata: {
    title: `Gavin Nelson Design`,
    description: `Gavin Nelson is a product designer who creates human centered design solutions.`,
    author: `@gavmn`,
    siteURL: 'https://gnelsondesign.com', 
  },
  plugins: [
     {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gavin Nelson Design`,
        short_name: `GNd`,
        start_url: `/`,
        background_color: `#6466FF`,
        theme_color: `#6466FF`,
        display: `minimal-ui`,
        icons: [
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-32x32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-48x48.png`,
            sizes: `48x48`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            "src": "/favicons/favicon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/favicons/favicon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/favicons/favicon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            src: `/favicons/favicon-256x256.png`,
            sizes: `256x25`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-180x180.png`,
            sizes: `180x180`,
            type: `image/png`,
          },
          {
            src: `/favicons/favicon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -96
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
     
  ],
}
