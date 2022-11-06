import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"

import fs from "fs"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils"

import SEO from "@/components/seo"
import Layout from "@/components/layout"
import Image from "next/legacy/image";
import { Br, HorizontalRule, CustomLink } from "@/components/postutils"
import Tool from "@/components/tool"

const components = {
  Image,
  a: CustomLink,
  hr: HorizontalRule,
  br: Br,
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
      <div className="mb-4">
        <MDXRemote {...source} components={components} />
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
