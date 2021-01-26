import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { device } from "../components/device"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import Caption from "../components/caption"

const Container = styled.div`
  margin: 4rem 0;
`
const MUsicThreadLink = styled.a`
  font-size: var(--font-xs);
  color: var(--text-secondary);
  &:hover {
    color: var(--text-primary);
  }
`

const MusicThread = ({ data }) => {
  console.log({ data })

  return (
    <Layout>
      <SEO title="MusicThread" />
      <Wrapper size="small">
        <Container>
          <h1>Heavy Rotation</h1>
          <Caption>
            A thread of recent favorite tracks, powered by{" "}
            <MUsicThreadLink href="https://musicthread.app/">
              MusicThread
            </MUsicThreadLink>
          </Caption>

          {/* <a href={data.thread.page_url}>{data.thread.title}</a> */}

          {data.links.reverse().map((data, key) => {
            return (
              <div key={key}>
                <p>{data.title}</p>
                <p>{data.artist}</p>
                <Image src={data.thumbnail_url} width={200} height={200} />
                <a href={data.page_url}>Listen</a>
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
