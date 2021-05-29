import Link from "next/link"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { device } from "@/components/device"

const Highlights = ({ highlights, books }) => {
  console.log(books)
  console.log(highlights)

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
              const category = books.results[book].category
              const title = books.results[book].title
              const author = books.results[book].author
              const bookID = books.results[book].id
              const sourceLink = books.results[book].source_url

              var numHighlights = 0
              var firstHighlight = true

              return (
                <>
                  <div className="source-container">
                    <a className="title" href={sourceLink}>
                      {title}
                    </a>
                    <p className="author">{author}</p>

                    {highlights.results.map((item, highlight) => {
                      const highlightSource =
                        highlights.results[highlight].book_id
                      const highlightText = highlights.results[highlight].text

                      const highlightTime =
                        highlights.results[highlight].highlighted_at

                      if (highlightSource == bookID && numHighlights < 8) {
                        numHighlights++

                        if (numHighlights > 1) {
                          firstHighlight = false
                        }

                        const date = new Date(highlightTime)

                        const dateStamp = `${
                          monthNames[date.getMonth()]
                        } ${date.getDate()}, ${date.getFullYear()}`

                        return (
                          <>
                            <Link href={`#`}>
                              <></>
                            </Link>
                            <a
                              className={`${
                                firstHighlight ? "title hidden" : "title"
                              }`}
                              href={sourceLink}
                            >
                              {title}
                            </a>
                            <p
                              className={`${
                                firstHighlight ? "author hidden" : "author"
                              }`}
                            >
                              {author}
                            </p>
                            <p className="highlight">{highlightText}</p>
                            <p className="date">{dateStamp}</p>
                          </>
                        )
                      }
                    })}
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

        .source-container {
        }

        .line {
          background-color: var(--primary-200);
          width: 2px;
          align-self: stretch;
          margin-top: -1.5rem;
        }

        .title {
          display: inline-block;
          font-size: var(--h3);
          font-weight: bold;
        }

        .author {
          color: var(--accent-100);
          margin-bottom: 0.25rem;
        }

        .title.hidden,
        .author.hidden {
          display: none;
        }

        .highlight {
        }

        .date {
          font-size: var(--small);
          color: var(--accent-100);
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
