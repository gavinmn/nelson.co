import { useRouter } from "next/router"
import Layout from "@/components/layout"
import SEO from "@/components/seo"

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
      <div className="flex flex-col items-start mb-8 ">
        <h1>Highlights</h1>
        <p>A feed of passages I've highlighted from articles across the web.</p>
        <a
          className="text-tertiary dark:text-darkTertiary"
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
              const highlightBookID = highlights.results[highlight].book_id
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
    revalidate: 60 * 60 * 2,
    props: { books, highlights },
  }
}
