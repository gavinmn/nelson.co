import fs from "fs"
import path from "path"
import matter from "gray-matter"
//Finding directory named "posts" from the current working directory of Node.
const postDirectory = path.join(process.cwd(), "/data/posts")
export const getSortedPosts = () => {
  //Reads all the files in the post directory
  const fileNames = fs.readdirSync(postDirectory)
  const allPostsData = fileNames.map(filename => {
    const slug = filename.replace(".mdx", "")
    const fullPath = path.join(postDirectory, filename)

    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data } = matter(fileContents)

    const frontmatter = {
      data,
    }
    return {
      slug,
      frontmatter,
    }
  })
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })
}
