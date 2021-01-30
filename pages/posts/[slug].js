import matter from "gray-matter"

import { getAllPostSlugs, getPostdata } from "../../lib/posts"

import PostWrapper from "@/components/postwrapper"

export default function Posts({ source, frontMatter }) {
  return <PostWrapper>{source}</PostWrapper>
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
  return {
    props: {
      source: content,
      frontMatter: data,
    },
  }
}
