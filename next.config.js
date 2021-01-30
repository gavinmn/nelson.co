const path = require("path")
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx", "md"],
  images: {
    domains: ["img.musicthread.app"],
  },
  webpack: (config, { isServer }) => {
    config.resolve.alias["@"] = path.resolve("./")

    return config
  },
})
