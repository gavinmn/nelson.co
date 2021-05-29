import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { device } from "@/components/device"

const Highlights = ({ highlights, books }) => {
  // console.log(books)
  // console.log(highlights)
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

              var numHighlights = 0

              if (category != "tweets") {
                return (
                  <>
                    <p className="title">{title}</p>
                    <p className="author">{author}</p>
                    {highlights.results.map((item, highlight) => {
                      const highlightSource =
                        highlights.results[highlight].book_id
                      const highlightText = highlights.results[highlight].text

                      if (highlightSource == bookID && numHighlights < 3) {
                        numHighlights++
                        return (
                          <>
                            <p className="highlight">{highlightText}</p>
                          </>
                        )
                      }
                    })}
                  </>
                )
              }
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

        .title {
          display: inline-block;
          font-size: var(--h3);
          font-weight: bold;
        }

        .author {
          color: var(--accent-100);
          margin-bottom: 0.25rem;
        }

        .highlight {
          margin-bottom: 1rem;
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
    `https://readwise.io/api/v2/books/`,
    headers
  )

  const books = await booksResponse.json()

  return {
    revalidate: 60 * 60 * 6,
    props: { highlights, books },
  }
}
