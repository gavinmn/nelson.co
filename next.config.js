const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
})
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "mdx", "md"],
  images: {
    domains: ["img.musicthread.app"],
  },
})
