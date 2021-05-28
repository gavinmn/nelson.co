import Layout from "@/components/layout"
import SEO from "@/components/seo"

const Highlights = ({ highlights, books }) => {
  console.log(highlights)
  console.log(books)
  return (
    <Layout>
      <SEO />
    </Layout>
  )
}

export default Highlights

export async function getStaticProps() {
  const headers = {
    headers: { Authorization: `TOKEN ${process.env.READWISE_TOKEN}` },
  }

  const highlightsResponse = await fetch(
    `https://readwise.io/api/v2/highlights/`,
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
