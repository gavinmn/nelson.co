import React from "react"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Hero from "@/components/hero"
import { device } from "@/components/device"
import Card from "@/components/card"
import ButtonInternal from "@/components/buttoninternal"
import ButtonExternal from "@/components/buttonexternal"
import SectionHeader from "@/components/sectionheader"
import PostPreview from "@/components/postpreview"
import { getSortedPosts } from "../lib/posts"

const IndexPage = ({ posts }) => {
  return (
    <Layout>
      <style jsx>{`
        .wrapper {
          max-width: 656px;
          padding: 0 5% 0 5%;
          margin: 0 auto;
        }

        .hero-container {
          margin-top: -1rem;
          display: grid;
          height: 100vh;
          align-items: center;
          justify-content: center;
        }

        .post-grid {
          display: grid;
          grid-template-columns: auto;
          grid-gap: 0.5rem;
          max-width: 816px;
        }

        .card-grid {
          display: grid;
          grid-template-columns: auto;
          grid-gap: 1rem;
        }

        .anchor {
          padding-top: 1rem;
          margin-top: -1rem;
        }

        @media ${device.desktop} {
          .hero-container {
            margin-top: 1rem;
          }

          .card-grid {
            grid-template-columns: 49.01960784% 49.01960784%;
            grid-gap: 0.5rem;
          }

          .anchor {
            padding-top: 0.5rem;
            margin-top: -0.5rem;
          }
        }
      `}</style>

      <SEO />
      <div className="wrapper">
        <div className="hero-container">
          <Hero />
        </div>

        <a aria-label="Work" id="work" href="/#work">
          <h1 className="anchor"></h1>
        </a>

        <SectionHeader section="Posts" />

        <div className="post-grid">
          {posts.map(({ frontmatter: { data }, slug }, key) => (
            <PostPreview
              key={key}
              title={data.title}
              subtitle={data.subtitle}
              time={data.time}
              href={slug}
            />
          ))}
        </div>

        <SectionHeader section="Projects" />
        <div className="card-grid">
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
        </div>

        <SectionHeader section="Icons" />
        <div className="card-grid">
          <Card
            width="double"
            imageSrc="/images/index/stocketa.png"
            imageWidth="816"
            imageHeight="294"
            title="Stocketa"
            subtitle="Icon Design"
            time="Spring 2021"
          >
            <ButtonExternal link="https://stocketa.com" />
          </Card>
          <Card
            width="double"
            imageSrc="/images/index/github.png"
            imageWidth="816"
            imageHeight="294"
            title="GitHub G1 Chip"
            subtitle="Icon Design"
            time="Winter 2020/2021"
          >
            <ButtonExternal link="https://apps.apple.com/app/github/id1477376905?ls=1" />
          </Card>
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
        </div>
      </div>
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
