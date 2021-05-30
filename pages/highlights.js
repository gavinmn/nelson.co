import Link from "next/link"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { device } from "@/components/device"

const Highlights = ({ highlights, books }) => {
  // console.log(books)
  // console.log(highlights)

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <Layout>
      <SEO />
      <div className="wrapper-large">
        <div className="container">
          <div className="wrapper-small">
            {books.results.map((item, book) => {
              const title = books.results[book].title
              const author = books.results[book].author
              const bookID = books.results[book].id
              const sourceLink = books.results[book].source_url
              const highlightTime = books.results[book].last_highlight_at
              const highlightsNum = books.results[book].num_highlights

              const date = new Date(highlightTime)

              const dateStamp = `${
                monthNames[date.getMonth()]
              } ${date.getDate()}, ${date.getFullYear()}`

              var numHighlights = 0
              var firstHighlight = true

              return (
                <>
                  <div className="collapse-container">
                    <div className="line" />

                    <div className="content-container">
                      <div className="metadata">
                        <a className="title" href={sourceLink}>
                          {title}
                        </a>
                        <p className="author">{author}</p>
                        <p className="date">{`Read ${dateStamp}`}</p>
                        <p className="highlights-num">{`${highlightsNum} highlights`}</p>
                      </div>

                      <div className="source-container">
                        {highlights.results.map((item, highlight) => {
                          const highlightSource =
                            highlights.results[highlight].book_id
                          const highlightText =
                            highlights.results[highlight].text

                          if (highlightSource == bookID && numHighlights < 8) {
                            numHighlights++

                            if (numHighlights > 1) {
                              firstHighlight = false
                            }

                            return (
                              <div className="highlight-container">
                                <div className="bullet">•</div>
                                <p className="highlight">{highlightText}</p>
                              </div>
                            )
                          }
                        })}
                      </div>
                    </div>
                  </div>
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

        .collapse-container {
          display: flex;
          flex-direction: row;
          margin-bottom: 1rem;
        }

        .metadata {
          display: flex;
          flex-direction: column;
        }

        .source-container {
          display: flex;
          flex-direction: column;
        }

        .line {
          background-color: var(--primary-200);
          width: 2px;
          align-self: stretch;
          margin-right: 1rem;
          flex-shrink: 0;
        }

        .title {
          display: inline-block;
          font-size: var(--h3);
          font-weight: bold;
        }

        .author {
        }

        .date {
          display: none;
          font-size: var(--small);
          color: var(--accent-100);
        }

        .highlights-num {
          font-size: var(--small);
          color: var(--accent-100);
          margin-bottom: 0.5rem;
        }

        .title.hidden,
        .author.hidden {
          display: none;
        }

        .highlight-container {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          margin-left: -1.26rem;
        }

        .bullet {
          font-size: var(--body);
          color: var(--accent-100);
          margin-right: 0.85rem;
        }

        .highlight {
          margin-bottom: 1.5rem;
        }

        @media ${device.desktop} {
          .container {
            margin: 4rem 0 0rem 0;
          }
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

  const highlightsResponse = await fetch(
    `https://readwise.io/api/v2/highlights/?page_size=1000`,
    headers
  )
  const highlights = await highlightsResponse.json()

  const booksResponse = await fetch(
    `https://readwise.io/api/v2/books/?category=articles`,
    headers
  )

  const books = await booksResponse.json()

  return {
    revalidate: 60 * 60 * 6,
    props: { highlights, books },
  }
}
