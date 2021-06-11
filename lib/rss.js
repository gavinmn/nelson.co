const fs = require("fs")
const RSS = require("rss")
const path = require("path")
const matter = require("gray-matter")
const fetch = require("node-fetch")
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const POSTS_PATH = path.join(process.cwd(), "/data/posts")

const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter(path => /\.mdx?$/.test(path))

const posts = postFilePaths.map(filePath => {
  const source = fs.readFileSync(path.join(POSTS_PATH, filePath))

  const { data, content } = matter(source)

  return {
    data,
    filePath,
    content,
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
  const url = `https://nelson.co/posts/${post.filePath.replace(/\.mdx?$/, "")}`

  const description = `${post.data.subtitle} <a href="${url}"> <strong>Full post →</strong></a>`

  feed.item({
    title: post.data.title,
    description: description,
    date: new Date(post.data.modified),
    author: "Gavin Nelson",
    url: url,
  })
})

const rss = feed.xml({ indent: true })
fs.writeFileSync("./public/feed.xml", rss)

//highlights RSS feed
async function highlightsRequest() {
  //function run in highlights.js getStaticProps()

  //get json articles data
  const headers = {
    headers: { Authorization: `TOKEN ${process.env.READWISE_TOKEN}` },
  }

  const articlesResponse = await fetch(
    `https://readwise.io/api/v2/books/?category=articles`,
    headers
  )

  const articles = await articlesResponse.json()

  //create highlights feed
  const highlightsFeed = new RSS({
    title: "Gavin Nelson's Highlights",
    site_url: "https://nelson.co/highlights",
    feed_url: "https://nelson.co/highlightsfeed.xml",
    image_url: "https://nelson.co/images/meta/highlightsog.png",
    language: "en",
  })

  articles.results.forEach(article => {
    const numHighlights = article.num_highlights
    const source = article.source_url
    const sourceAuthor = article.author

    var highlightText = ""

    if (numHighlights == 1) {
      highlightText = "highlight"
    } else {
      highlightText = "highlights"
    }

    const articleID = article.id

    const description = `<a href="https://nelson.co/highlights#${articleID}"> <strong>Read ${numHighlights} ${highlightText} →</strong> <br></br><br></br> <a href="${source}">Original article </a> from ${sourceAuthor}`

    if (numHighlights != 0) {
      highlightsFeed.item({
        title: article.title,
        description: description,
        date: new Date(article.last_highlight_at),
        author: "Gavin Nelson",
        url: `https://nelson.co/highlights#${articleID}`,
      })
    }
  })

  const highlightsRss = highlightsFeed.xml({ indent: true })
  fs.writeFileSync("./public/highlightsfeed.xml", highlightsRss)
}
highlightsRequest()
