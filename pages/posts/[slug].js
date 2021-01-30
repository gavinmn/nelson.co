import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import { getAllPostSlugs, getPostdata } from "../../lib/posts"
import { MDXProvider } from "@mdx-js/react"

import PostWrapper from "@/components/postwrapper"

import MarkdownComponents from "@/components/markdowncomponents"
const components = { MarkdownComponents }

const provider = {
  component: MDXProvider,
}

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, { components, provider })
  console.log(provider)

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
    provider,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}
