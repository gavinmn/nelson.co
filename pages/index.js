import Link from "next/link"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Hero from "@/components/hero"
import Section from "@/components/section"
import Arena from "@/components/svg/arena"
import Post from "@/components/post"
import ArrowRight from "@/components/svg/arrowright"
import Project from "@/components/project"
import Icon from "@/components/icon"
import { device } from "@/components/device"

import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../lib/mdxUtils"

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
          <div className="flex flex-row justify-between sm:justify-start align-center">
            <a
              className="sm:mr-8 text-tertiary"
              href="mailto:gavin@nelson.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              className="sm:mr-8 text-tertiary"
              href="https://twitter.com/Gavmn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="sm:mr-8 text-tertiary"
              href="https://github.com/gavinmn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="sm:mr-8 text-tertiary"
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
              Wander the garden
              <ArrowRight />
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
            description="A macOS and iOS icon theme"
          />
        </Section>
        <Section title="Select Icons">
          <Icon />
        </Section>
      </div>
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
