import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import { getAllPostSlugs, getPostdata } from "../../lib/posts"
import PostWrapper from "@/components/postwrapper"

import Image from "next/image"
import Ztext from "react-ztext"

import CustomImage from "@/components/customimage"
import Caption from "@/components/caption"
import CustomLink from "@/components/posts/customlink"
import Hr from "@/components/hr"
import Break from "@/components/break"

import ZContainer from "@/components/posts/zcontainer"
import Cube from "@/components/posts/cube"

const components = {
  a: CustomLink,
  h4: Caption,
  hr: Hr,
  br: Break,
  Image,
  CustomImage,
  ZContainer,
  Ztext,
  Cube,
}

export default function Posts({ source, frontMatter }) {
  const content = hydrate(source, {
    components,
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
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}
