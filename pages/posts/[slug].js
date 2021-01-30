import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import { getAllPostSlugs, getPostdata } from "../../lib/posts"

import CustomImage from "@/components/customimage"
import Ztext from "react-ztext"
import Cube from "@/components/posts/cube"
import ZContainer from "@/components/posts/zcontainer"

const components = { CustomImage, Ztext, Cube, ZContainer }

import PostWrapper from "@/components/postwrapper"

export default function Posts({ source, frontMatter }) {
  console.log(frontMatter)
  const content = hydrate(source, { components })
  return (
    <PostWrapper
      title={frontMatter.title}
      og={frontMatter.og}
      description={frontMatter.description}
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
