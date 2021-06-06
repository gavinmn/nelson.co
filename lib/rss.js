const fs = require("fs")
const RSS = require("rss")
const path = require("path")
const matter = require("gray-matter")

const posts = postFilePaths.map(filePath => {
  const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
  const { data } = matter(source)

  return {
    data,
    filePath,
  }
})

const feed = new RSS({
  title: "Gavin Nelson",
  site_url: "https://nelson.co",
  feed_url: "https://nelson.co/feed.xml",
  image_url: "https://nelson.co/images/meta/og.png",
  language: "en",
})

posts.forEach(post => {
  const url = `https://nelson.co/posts/${post.filePathpath.replace(
    /\.mdx?$/,
    ""
  )}`

  feed.item({
    title: post.data.title,
    description: post.data.subtitle,
    date: new Date(post.data.date),
    author: "Gavin nelson",
    url: url,
  })
})

console.log("test")

const rss = feed.xml({ indent: true })
fs.writeFileSync("https://nelson.co/public/feed.xml", rss)
