import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { device } from "../components/device"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Wrapper from "../components/wrapper"
import Caption from "../components/caption"
import MusicEntry from "../components/musicentry"

const Container = styled.div`
  margin: 8rem auto;
  max-width: 338px;

  @media ${device.desktop} {
    margin: 4rem 0 0 0;
    max-width: 624px;
  }
`
const MusicThreadLink = styled.a`
  font-size: var(--font-xs);
  color: var(--text-secondary);
  &:hover {
    color: var(--text-primary);
  }
`

const MonthContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 4rem;
`

const Line = styled.div`
  background-color: var(--bg-secondary);
  width: 4px;
  align-self: stretch;
  margin-right: 32px;
  margin-top: -32px;
`
const MusicContainer = styled.div`
  display: grid;
  grid-gap: 64px;
`

const MusicThread = ({ data }) => {
  console.log({ data })

  return (
    <Layout>
      <SEO title="MusicThread" />
      <Wrapper size="large">
        <Wrapper size="small">
          <Container>
            <h1>Heavy Rotation</h1>
            <Caption>
              A thread of recent favorite tracks, powered by{" "}
              <MusicThreadLink href="https://musicthread.app/">
                MusicThread
              </MusicThreadLink>
            </Caption>

            <MonthContainer>
              <Line />

              <MusicContainer>
                {data.links.map(data => {
                  return (
                    <div>
                      <MusicEntry
                        key={data.key}
                        link={data.page_url}
                        src={data.thumbnail_url}
                        title={data.title}
                        artist={data.artist}
                      />
                    </div>
                  )
                })}
              </MusicContainer>
            </MonthContainer>
          </Container>
        </Wrapper>
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
