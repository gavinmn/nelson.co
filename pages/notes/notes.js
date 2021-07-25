import Layout from "@/components/layout"
import SEO from "@/components/seo"
import PostPreview from "@/components/postpreview"

import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils"

const Notes = ({ posts }) => {
  const orderedPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.data.modified)) - Number(new Date(a.data.modified))
  )
  return (
    <Layout>
      <div>
        <div className="post-grid">
          {orderedPosts.map((post, key) => {
            return (
              <PostPreview
                key={key}
                title={post.data.title}
                date={post.data.date}
                href={`${post.filePath.replace(/\.mdx?$/, "")}`}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Notes

export function getStaticProps() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))

    const { data } = matter(source)

    return {
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
