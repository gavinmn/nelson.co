import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import { getAllPostSlugs, getPostdata } from "../../lib/posts"
import PostWrapper from "@/components/postwrapper"

import MarkdownComponents from "@/components/markdowncomponents"
const components = { MarkdownComponents }

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, { components })
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
    scope: data,
    components,
  })
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}
