import React from "react"
import styled from "styled-components"
import { device } from "../../components/device"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import MusicThread from "../../components/musicthread"

const TwentyOne = ({ data }) => (
  <Layout>
    <SEO title="test" og="og.png" description=", powered by musicthread.app." />
    <MusicThread links={data.links} title="test" subtitle="test"></MusicThread>
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
