import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MusicThread from "../../components/musicthread"

const HeavyRotation = ({ data }) => (
  <Layout>
    <SEO
      title="Heavy Rotation"
      og="heavyrotationog.png"
      description={`${data.thread.description}, powered by musicthread.app.`}
    />
    <MusicThread
      links={data.links}
      title="Heavy Rotation"
      subtitle={data.thread.description}
    ></MusicThread>
  </Layout>
)

export async function getStaticProps() {
  const res = await fetch(
    `https://musicthread.app/api/v0/thread/1mhhP6pYnnOic8X8SvzJxPsikRU`
  )
  const data = await res.json()

  return {
    revalidate: 60 * 60 * 6,
    props: { data },
  }
}

export default HeavyRotation
