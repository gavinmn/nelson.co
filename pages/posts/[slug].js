import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import { getAllPostSlugs, getPostdata } from "../../lib/posts"

// const components = { MyBackground, MyButton }

import PostWrapper from "@/components/postwrapper"

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source)
  return <PostWrapper>{content}</PostWrapper>
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
  })
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}
