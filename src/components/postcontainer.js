import React from "react"
import styled from "styled-components"
import { device } from "@/components/device"
import Post from "@/components/post"

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-gap: 0.5rem;
  max-width: 816px;
`

{
  /* const PostContainer = props => (
  <PostGrid>
    <Post
      title="Blender Basics"
      subtitle="A starting point for Blender beginners from a former beginner."
      time="Published January 21, 2021"
      href="blenderbasics"
    />
    <Post
      title="Test"
      subtitle="A starting point for Blender beginners from a former beginner."
      time="Published January 21, 2021"
      href="testmdx"
    />
  </PostGrid>
) */
}

const PostContainer = ({ posts }) => (
  <PostGrid>
    {posts.map(post => (
      <Post
        title="Blender Basics"
        subtitle="A starting point for Blender beginners from a former beginner."
        time="Published January 21, 2021"
        href="blenderbasics"
      />
    ))}
  </PostGrid>
)

export default PostContainer

// posts will be populated at build time by getStaticProps()
function Blog({ posts }) {
  return (
    <ul>
      {posts.map(post => (
        <li>
          <h3>{post.filename}</h3>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts")
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, "utf8")

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename,
      content: fileContents,
    }
  })
  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
