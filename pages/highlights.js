const fs = require("fs")
const RSS = require("rss")
import { useRouter } from "next/router"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { device } from "@/components/device"

import Readwisedata from "@/components/readwisedata.js"

const Highlights = ({ books, highlights }) => {
  const router = useRouter()
  const pathName = router.asPath

  return (
    <Layout>
      <SEO
        title="Highlights"
        og="highlightsog.png"
        description="A feed of passages I've highlighted from articles across the web."
      />
      <div className="wrapper-large">
        <div className="container">
          <div className="wrapper-small">
            <div className="header-container">
              <h1>Highlights</h1>
              <p>
                A feed of passages I've highlighted from articles across the
                web.
              </p>

              <a
                className="rss"
                href="https://nelson.co/highlightsfeed.xml"
                target="_blank"
                rel="noopener noreferrer"
              >
                Subscribe via RSS
              </a>
            </div>
            {books.results.map((item, book) => {
              const bookItem = books.results[book]
              const bookID = books.results[book].id
              const bookHighlights = []
              const bookHighlightIDs = []

              return (
                <>
                  {highlights.results.map((item, highlight) => {
                    const highlightBookID =
                      highlights.results[highlight].book_id
                    const highlightID = highlights.results[highlight].id

                    const highlightText = highlights.results[highlight].text

                    if (highlightBookID == bookID) {
                      bookHighlights.push(highlightText)
                      bookHighlightIDs.push(highlightID)
                    }
                  })}

                  <Readwisedata
                    key={book}
                    book={bookItem}
                    highlights={bookHighlights.reverse()}
                    highlightIDs={bookHighlightIDs}
                    bookID={bookID}
                    path={pathName}
                  />
                </>
              )
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper-large {
          max-width: 656px;
          padding: 0 5% 0 5%;
          margin: 0 auto;
        }

        .wrapper-small {
          max-width: 576px;
          padding: 0;
          margin: 0 auto;
        }

        .container {
          margin: 8rem 0 0rem 0;
        }

        .header-container {
          margin-bottom: 2rem;
          margin-left: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media only screen and (min-width: 768px) {
          .header-container {
            margin-left: 1rem;
          }
        }

              
        .highlights-container {
          display: flex;
          flex-direction: column;
        }

        .highlights-container.closed {
          display: none;
        }

        

        @media ${device.desktop} {
          .container {
            margin: 4rem 0 0rem 0;
          }

      `}</style>
    </Layout>
  )
}

export default Highlights

export async function getStaticProps() {
  const headers = {
    headers: { Authorization: `TOKEN ${process.env.READWISE_TOKEN}` },
  }

  const booksResponse = await fetch(
    `https://readwise.io/api/v2/books/?category=articles`,
    headers
  )

  const books = await booksResponse.json()

  const highlightsResponse = await fetch(
    `https://readwise.io/api/v2/highlights/?page_size=1000`,
    headers
  )
  const highlights = await highlightsResponse.json()

  //create highlights feed
  const highlightsFeed = new RSS({
    title: "Gavin Nelson's Highlights",
    site_url: "https://nelson.co/highlights",
    feed_url: "https://nelson.co/highlightsfeed.xml",
    image_url: "https://nelson.co/images/meta/highlightsog.png",
    language: "en",
  })

  highlights.results.forEach(article => {
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

  return {
    revalidate: 60 * 60 * 2,
    props: { books, highlights },
  }
}
