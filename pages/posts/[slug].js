import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"

import fs from "fs"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils"

import SEO from "@/components/seo"
import Layout from "@/components/layout"
import Image from "next/image"
import CustomImage from "@/components/customimage"
import Caption from "@/components/caption"
import CustomLink from "@/components/customlink"
import HorizontalRule from "@/components/horizontalrule"
import Break from "@/components/break"

import Tool from "@/components/tool"

const components = {
  a: CustomLink,
  h4: Caption,
  hr: HorizontalRule,
  br: Break,
  Image,
  CustomImage,
  Tool,
}

export default function Posts({ source, frontMatter }) {
  return (
    <Layout>
      <SEO
        title={frontMatter.title}
        og={frontMatter.og}
        description={frontMatter.description}
      />
      <div className="my-16 md:my-32">
        <div>
          <MDXRemote {...source} components={components} />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

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
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(path => path.replace(/\.mdx?$/, ""))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
