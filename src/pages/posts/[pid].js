import PostWrapper from "@/components/postwrapper"

const Post = ({ children }) => (
  <PostWrapper
    title="Blender Basics"
    subtitle=""
    time="Published January 21, 2021"
    og="blenderog.png"
    description="A starting point for Blender beginners from a former beginner."
  >
    {children}
  </PostWrapper>
)

export default Post
