import Link from "next/link"

import Layout from "@/components/layout"
import SEO from "@/components/seo"
import { device } from "@/components/device"

import ReadwiseMetadata from "@/components/readwiseMetadata.js"
import ReadwiseHighlight from "@/components/readwiseHighlight.js"

const Highlights = ({ books, highlights }) => {
  return (
    <Layout>
      <SEO />
      <div className="wrapper-large">
        <div className="container">
          <div className="wrapper-small">
            {books.results.map((item, book) => {
              const bookitem = books.results[book]
              {
                /* console.log(books.results[book]) */
              }
              return <ReadwiseMetadata book={bookitem}></ReadwiseMetadata>
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

  return {
    revalidate: 60 * 60 * 6,
    props: { books, highlights },
  }
}
