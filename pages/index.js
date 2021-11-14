import Link from "next/link"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Hero from "@/components/hero"
import Section from "@/components/section"
import Arena from "@/components/svg/arena"
import Post from "@/components/post"
import Arrow from "@/components/svg/arrow"
import Project from "@/components/project"
import { device } from "@/components/device"

import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../lib/mdxUtils"

import apollo from "../public/images/index/apollo.png"
import blender from "../public/images/index/blender.png"
import claquette from "../public/images/index/claquette.png"
import craft from "../public/images/index/craft.png"
import github from "../public/images/index/github.png"
import githubearlybird from "../public/images/index/githubearlybird.png"
import githubholo from "../public/images/index/githubholo.png"
import githubzen from "../public/images/index/githubzen.png"
import hyperspace from "../public/images/index/hyperspace.png"
import instagram from "../public/images/index/instagram.png"
import montereyImage from "../public/images/index/montereyimage.png"
import notes from "../public/images/index/notes.png"
import obsidian from "../public/images/index/obsidian.png"
import slack from "../public/images/index/slack.png"
import stocketa from "../public/images/index/stocketa.png"
import things from "../public/images/index/things.png"
import reflect from "../public/images/index/reflect.png"
import vscode from "../public/images/index/vscode.png"
import xcode from "../public/images/index/xcode.png"

const IndexPage = ({ posts }) => {
  const orderedPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.data.modified)) - Number(new Date(a.data.modified))
  )

  return (
    <Layout>
      <SEO />
      <div className="grid gap-16 mt-16 auto-rows-auto md:mt-64">
        <Hero />
        <Section title="Connect">
          <div className="flex flex-row align-center;">
            <a
              className="mr-8 text-tertiary"
              href="mailto:gavin@nelson.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              className="mr-8 text-tertiary"
              href="https://twitter.com/Gavmn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="mr-8 text-tertiary"
              href="https://github.com/gavinmn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="mr-8 text-tertiary"
              href="https://dribbble.com/Gavin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
            <Arena />
          </div>
        </Section>
        <Section title="Notes">
          <Link href="/notes" passhref>
            <a
              className=" text-tertiary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wander the garden →
            </a>
          </Link>
        </Section>
        <Section title="Posts">
          {orderedPosts.map((post, key) => {
            return (
              <div className="mb-2">
                <Post
                  key={key}
                  title={post.data.title}
                  date={post.data.date}
                  href={`${post.filePath.replace(/\.mdx?$/, "")}`}
                />
              </div>
            )
          })}
        </Section>
        <Section title="Projects">
          <div className="mb-4">
            <Project
              link="/highlights"
              title="Highlights"
              description="A feed of passages I’ve highlighted from articles across the web"
            />
          </div>
          <div className="mb-4">
            <Project
              link="/musicthread/heavy-rotation"
              title="Heavy Rotation"
              description="A collection of what I've been listening to recently"
            />
          </div>
          <Project
            link="https://gumroad.com/l/dvctd"
            title="Monterey"
            description="A macOS and iOS icon them"
          />
        </Section>
        <Section title="Icons"></Section>
      </div>

      {/* <SectionHeader section="Posts" />

      <div className="post-grid">
        {orderedPosts.map((post, key) => {
          return (
            <PostPreview
              key={key}
              title={post.data.title}
              date={post.data.date}
              href={`${post.filePath.replace(/\.mdx?$/, "")}`}
            />
          )
        })}
      </div>

      <SectionHeader section="Projects" />
      <div className="project-grid">
        <Project
          title="Highlights"
          description="A feed of passages I've highlighted from articles across the web."
          href="/highlights"
        />
        <Project
          title="Heavy Rotation"
          description="A collection of what I've been listening to recently."
          href="/musicthread/heavy-rotation"
        />
      </div>
      <div className="card-grid">
        <Card
          width="double"
          src={montereyImage}
          title="Monterey"
          subtitle="Icon Design"
        >
          <ButtonExternal link="https://gumroad.com/l/dvctd" />
        </Card>
      </div>

      <a aria-label="Icons" id="icons" className="anchor" href="/#icons">
        <h1></h1>
      </a>
      <SectionHeader section="Icons" />
      <div className="card-grid">
        <Card
          width="single"
          src={githubzen}
          title="GitHub Universe 2021"
          subtitle="2021"
        >
          <ButtonExternal link="https://apps.apple.com/app/github/id1477376905?ls=1" />
        </Card>
        <Card
          width="single"
          src={githubholo}
          title="GitHub Holo"
          subtitle="2021"
        >
          <ButtonExternal link="https://apps.apple.com/app/github/id1477376905?ls=1" />
        </Card>
        <Card width="double" src={things} title="Things" subtitle="2021">
          <ButtonDownload link="https://gnelson.gumroad.com/l/things-icon" />
        </Card>
        <Card width="single" src={vscode} title="VS Code" subtitle="2021">
          <ButtonDownload link="https://gnelson.gumroad.com/l/vscode" />
        </Card>
        <Card width="single" src={obsidian} title="Obsidian" subtitle="2021">
          <ButtonDownload link="/downloads/obsidian-icon-gavin-nelson.zip" />
        </Card>
        <Card
          width="single"
          src={hyperspace}
          title="GitHub Hyperspace"
          subtitle="2021"
        >
          <ButtonExternal link="https://apps.apple.com/app/github/id1477376905?ls=1" />
        </Card>
        <Card
          width="single"
          src={githubearlybird}
          title="GitHub Early Bird"
          subtitle="2021"
        >
          <ButtonExternal link="https://apps.apple.com/app/github/id1477376905?ls=1" />
        </Card>
        <Card width="single" src={reflect} title="Reflect" subtitle="2021">
          <ButtonExternal link="https://reflect.app" />
        </Card>
        <Card width="single" src={stocketa} title="Stocketa" subtitle="2021">
          <ButtonExternal link="https://stocketa.com" />
        </Card>
        <Card width="single" src={craft} title="Craft" subtitle="2021">
          <ButtonExternal link="https://www.craft.do" />
        </Card>
        <Card
          width="single"
          src={github}
          title="GitHub G1 Chip"
          subtitle="2021"
        >
          <ButtonExternal link="https://apps.apple.com/app/github/id1477376905?ls=1" />
        </Card>
        <Card width="single" src={claquette} title="Claquette" subtitle="2020">
          <ButtonExternal link="https://www.peakstep.com/claquette/" />
        </Card>

        <Card
          width="single"
          src={apollo}
          title="Apollo Reddit"
          subtitle="2020"
        ></Card>
        <Card width="double" src={slack} title="Slack" subtitle="2020"></Card>
        <Card
          width="single"
          src={instagram}
          title="Instagram"
          subtitle="2020"
        ></Card>
        <Card width="single" src={xcode} title="Xcode" subtitle="2020"></Card>
        <Card width="single" src={notes} title="Notes" subtitle="2020"></Card>
        <Card
          width="single"
          src={blender}
          title="Blender"
          subtitle="2020"
        ></Card> */}
      {/* <style jsx>{`
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

        .post-grid,
        .project-grid {
          display: grid;
          grid-template-columns: auto;
          grid-gap: 0.5rem;
          max-width: 816px;
        }

        .project-grid {
          margin-bottom: 2rem;
        }

        @media only screen and (min-width: 768px) {
          .post-grid,
          .project-grid {
            grid-gap: 0.25rem;
          }

          .project-grid {
            margin-bottom: 1rem;
          }
        }

        .card-grid {
          display: grid;
          grid-template-columns: auto;
          grid-column-gap: 1rem;
          grid-row-gap: 2rem;
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
            grid-column-gap: 0.5rem;
            grid-row-gap: 1rem;
          }

          .anchor {
            padding-top: 0.5rem;
            margin-top: -0.5rem;
          }
        }
      `}</style>*/}
    </Layout>
  )
}

export default IndexPage

export function getStaticProps() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))

    const { data } = matter(source)

    return {
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
