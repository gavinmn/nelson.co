const path = require("path")
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx", "md"],
  images: {
    domains: ["img.musicthread.app"],
  },
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias["@"] = path.resolve("./")

    // if (!dev && !isServer) {
    //   Object.assign(config.resolve.alias, {
    //     react: "preact/compat",
    //     "react-dom/test-utils": "preact/test-utils",
    //     "react-dom": "preact/compat",
    //   })
    // }

    return config
  },
})
