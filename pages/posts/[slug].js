import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import { getAllPostSlugs, getPostdata } from "../../lib/posts"
import Ztext from "react-ztext"

import MarkdownComponents from "@/components/markdowncomponents"
import { ThemeProvider } from "styled-components"
import Theme from "@/styles/theme"

import PostWrapper from "@/components/postwrapper"

const ZContainer = props => <div className="z-container">{props.children}</div>
const Cube = props => <div className="cube">{props.children}</div>

const components = { MarkdownComponents, ZContainer, Ztext, Cube }

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, {
    components,
    provider: {
      component: props => <ThemeProvider {...props} theme={Theme} />,
    },
  })

  return (
    <PostWrapper
      title={frontMatter.title}
      og={frontMatter.og}
      description={frontMatter.subtitle}
      time={frontMatter.time}
    >
      {content}
    </PostWrapper>
  )
}
export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const postContent = await getPostdata(params.slug)
  const { data, content } = matter(postContent)

  const mdxSource = await renderToString(content, {
    components,
    provider: {
      component: props => <ThemeProvider {...props} theme={Theme} />,
    },
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}
