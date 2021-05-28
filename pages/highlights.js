import Layout from "@/components/layout"
import SEO from "@/components/seo"

const Highlights = ({ highlights }) => {
  console.log(highlights)
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

  const res = await fetch(`https://readwise.io/api/v2/highlights/`, headers)
  const highlights = await res.json()

  return {
    revalidate: 60 * 60 * 6,
    props: { highlights },
  }
}
