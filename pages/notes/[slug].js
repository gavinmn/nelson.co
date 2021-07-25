import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"

import fs from "fs"
import path from "path"
import { notesFilePaths, NOTES_PATH } from "../../lib/mdxUtils"

import PostWrapper from "@/components/postwrapper"

import Image from "next/image"

import CustomImage from "@/components/customimage"
import Caption from "@/components/caption"
import CustomLink from "@/components/posts/customlink"
import HorizontalRule from "@/components/horizontalrule"
import Break from "@/components/break"

const components = {
  a: CustomLink,
  h4: Caption,
  hr: HorizontalRule,
  br: Break,
  Image,
  CustomImage,
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

export const getStaticProps = async ({ params }) => {
  const notesFilePath = path.join(NOTES_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(notesFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = notesFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
