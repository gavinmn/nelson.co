import React from "react"
import styled from "styled-components"
import { device } from "../../components/device"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MusicThread from "../../components/musicthread"

const TwentyOne = ({ data }) => (
  <Layout>
    <SEO
      title="2021 Favorites"
      og="twentyoneog.png"
      description={`${data.thread.description}, powered by musicthread.app.`}
    />
    <MusicThread
      links={data.links}
      title="2021 Favorites"
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

export default TwentyOne
