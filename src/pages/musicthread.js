import React from "react"
import styled from "styled-components"
import { device } from "../components/device"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import Image from "next/image"

const Container = styled.div`
  margin: 4rem 0;
`

const MusicThread = ({ data }) => {
  console.log({ data })

  return (
    <Layout>
      <SEO title="MusicThread" />
      <Wrapper size="small">
        <Container>
          <a src={data.thread.page_url}>{data.thread.title}</a>
          {data.links.map((data, key) => {
            return (
              <div key={key}>
                <p>{data.title}</p>
                <p>{data.artist}</p>
                <Image src={data.thumbnail_url} width={200} height={200} />
              </div>
            )
          })}
        </Container>
      </Wrapper>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://musicthread.app/api/v0/thread/1mhhP6pYnnOic8X8SvzJxPsikRU`
  )
  const data = await res.json()

  return { props: { data } }
}

export default MusicThread
