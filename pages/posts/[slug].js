import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"
import { getAllPostSlugs, getPostdata } from "../../lib/posts"

import PostWrapper from "@/components/postwrapper"

import Link from "next/link"
import Image from "next/image"
import CustomImage from "@/components/customimage"

import TestComponent from "@/components/test/testcomponent"
import CustomLink from "@/components/test/customlink"
import CustomHeadingFour from "@/components/test/customheadingfour"

const components = {
  Image,
  CustomImage,
  TestComponent,
  a: CustomLink,
  h4: CustomHeadingFour,
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
