import fs from "fs"
import path from "path"
import matter from "gray-matter"

import PostWrapper from "@/components/postwrapper"
export default function Post({ content, frontmatter }) {
  console.log(frontmatter)
  return <PostWrapper>{content}</PostWrapper>
}

export async function getStaticPaths() {
  const files = fs.readdirSync("src/data/posts")

  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join("src/data/posts", slug + ".mdx"))
    .toString()

  const { data, content } = matter(markdownWithMetadata)

  const frontmatter = {
    data,
  }

  return {
    props: {
      content: content,
      frontmatter,
    },
  }
}
