import React from "react"
import styled from "styled-components"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Hero from "@/components/hero"
import Wrapper from "@/components/wrapper"
import { device } from "@/components/device"
import Image from "next/image"
import Card from "@/components/card"
import ButtonInternal from "@/components/buttoninternal"
import ButtonExternal from "@/components/buttonexternal"
import SectionHeader from "@/components/sectionheader"
import Post from "@/components/post"

import { getSortedPosts } from "../lib/posts"

const HeroContainer = styled.div`
  margin-top: -1rem;
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: center;

  @media ${device.desktop} {
    margin-top: 1rem;
  }
`

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 0.5rem;
  max-width: 816px;
`
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;

  @media ${device.desktop} {
    grid-template-columns: 49.01960784% 49.01960784%;
    grid-gap: 0.5rem;
  }
`

const Anchor = styled.h1`
  padding-top: 1rem;
  margin-top: -1rem;
  @media ${device.desktop} {
    padding-top: 0.5rem;
    margin-top: -0.5rem;
  }
`

const IndexPage = ({ posts }) => {
  console.log(posts)
  return (
    <Layout>
      <SEO />
      <Wrapper size={"large"}>
        <HeroContainer>
          <Hero />
        </HeroContainer>

        <a aria-label="Work" id="work" href="/#work">
          <Anchor></Anchor>
        </a>

        <SectionHeader section="Posts" />

        <PostGrid>
          {posts.map(({ frontmatter: { data }, slug }, key) => (
            <Post
              key={key}
              title={data.title}
              subtitle={data.subtitle}
              time={data.time}
              href={slug}
            />
          ))}
        </PostGrid>

        <SectionHeader section="Projects" />
        <CardGrid>
          <Card
            width="double"
            imageSrc="/images/index/montereyimage.png"
            imageWidth="816"
            imageHeight="294"
            title="Monterey"
            subtitle="Icon Design"
            time="Summer 2020"
          >
            <ButtonExternal link="https://gumroad.com/l/dvctd" />
          </Card>

          <Card
            width="double"
            imageSrc="/images/index/chalkimage.png"
            imageWidth="816"
            imageHeight="294"
            title="Chalk"
            subtitle="Interaction and Visual Design"
            time="Summer 2019"
          >
            <ButtonInternal link="/chalk" />
          </Card>
        </CardGrid>

        <SectionHeader section="Icons" />
        <CardGrid>
          <Card
            width="single"
            imageSrc="/images/index/claquette.png"
            imageWidth="816"
            imageHeight="294"
            title="Claquette"
            subtitle="Icon Design"
            time="Fall 2020"
          >
            <ButtonExternal link="https://www.peakstep.com/claquette/" />
          </Card>

          <Card
            width="single"
            imageSrc="/images/index/mosaic.png"
            imageWidth="816"
            imageHeight="294"
            title="Mosaic"
            subtitle="Icon Design"
            time="Fall 2020"
          >
            <ButtonExternal link="https://mosaic.rcopstein.com" />
          </Card>

          <Card
            width="single"
            imageSrc="/images/index/autooth.png"
            imageWidth="816"
            imageHeight="294"
            title="Autooth"
            subtitle="Icon Design"
            time="Fall 2020"
          >
            <ButtonExternal link="https://app.airport.community/app/recGP4zZQMV3WB9LZ" />
          </Card>

          <Card
            width="single"
            imageSrc="/images/index/apollo.png"
            imageWidth="816"
            imageHeight="294"
            title="Apollo Reddit"
            subtitle="Icon Design"
            time="Fall 2020"
          ></Card>

          <Card
            width="double"
            imageSrc="/images/index/slack.png"
            imageWidth="816"
            imageHeight="294"
            title="Slack"
            subtitle="Icon Design"
            time="Winter 2020"
          ></Card>

          <Card
            width="single"
            imageSrc="/images/index/instagram.png"
            imageWidth="816"
            imageHeight="294"
            title="Instagram"
            subtitle="Icon Design"
            time="Winter 2020"
          ></Card>

          <Card
            width="single"
            imageSrc="/images/index/xcode.png"
            imageWidth="816"
            imageHeight="294"
            title="Xcode"
            subtitle="Icon Design"
            time="Summer 2020"
          ></Card>

          <Card
            width="single"
            imageSrc="/images/index/notes.png"
            imageWidth="816"
            imageHeight="294"
            title="Notes"
            subtitle="Icon Design"
            time="Summer 2020"
          ></Card>
          <Card
            width="single"
            imageSrc="/images/index/blender.png"
            imageWidth="816"
            imageHeight="294"
            title="Blender"
            subtitle="Icon Design"
            time="Summer 2020"
          ></Card>
        </CardGrid>
      </Wrapper>
    </Layout>
  )
}

export default IndexPage

export async function getStaticProps() {
  const posts = getSortedPosts()
  return {
    props: {
      posts,
    },
  }
}
