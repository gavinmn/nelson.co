import matter from "gray-matter"

import { serialize } from "next-mdx-remote/serialize"

import { MDXRemote } from "next-mdx-remote"
import { getAllPostSlugs, getPostdata } from "../../lib/posts"
import PostWrapper from "@/components/postwrapper"

import Image from "next/image"
import Ztext from "react-ztext"

import CustomImage from "@/components/customimage"
import Caption from "@/components/caption"
import CustomLink from "@/components/posts/customlink"
import HorizontalRule from "@/components/horizontalrule"
import Break from "@/components/break"

import ZContainer from "@/components/posts/zcontainer"
import Cube from "@/components/posts/cube"

import Tool from "@/components/tool"

const components = {
  a: CustomLink,
  h4: Caption,
  hr: HorizontalRule,
  br: Break,
  Image,
  CustomImage,
  ZContainer,
  Ztext,
  Cube,
  Tool,
}

export default function Posts({ source, frontMatter }) {
  return (
    <PostWrapper
      title={frontMatter.title}
      og={frontMatter.og}
      description={frontMatter.subtitle}
      time={frontMatter.time}
    >
      <MDXRemote {...source} components={components} />
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

  const mdxSource = await serialize(content)

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}
