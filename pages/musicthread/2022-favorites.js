import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MusicThread from "../../components/musicthread"

const TwentyTwo = ({ data }) => (
  <Layout>
    <SEO
      title="2022 Favorites"
      og="twentytwoog.png"
      description={`${data.thread.description}, powered by musicthread.app.`}
    />
    <MusicThread
      links={data.links}
      title="2022 Favorites"
      subtitle={data.thread.description}
    ></MusicThread>
  </Layout>
)

export async function getStaticProps() {
  const res = await fetch(
    `https://musicthread.app/api/v0/thread/23I5VGLACXqzq71OEZvZZIe1SbV`
  )
  const data = await res.json()

  return {
    revalidate: 60 * 60 * 6,
    props: { data },
  }
}

export default TwentyTwo
