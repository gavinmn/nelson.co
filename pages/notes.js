import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Note from "@/components/note"

import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { notesFilePaths, NOTES_PATH } from "../lib/mdxUtils"

const Notes = ({ notes }) => {
  console.log(notes)
  const orderedNotes = notes.sort(
    (a, b) =>
      Number(new Date(b.data.modified)) - Number(new Date(a.data.modified))
  )
  return (
    <Layout>
      <SEO />
      <div className="container">
        <div className="wrapper">
          <div>
            <div className="notes-grid">
              {orderedNotes.map((note, key) => {
                return (
                  <Note
                    key={key}
                    title={note.data.title}
                    date={note.data.date}
                    href={`${note.filePath.replace(/\.mdx?$/, "")}`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: 4rem 0 0rem 0;
        }
        .wrapper {
          max-width: 656px;
          padding: 0 5% 0 5%;
          margin: 0 auto;
        }
      `}</style>
    </Layout>
  )
}

export default Notes

export function getStaticProps() {
  const notes = notesFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(NOTES_PATH, filePath))

    const { data } = matter(source)

    return {
      data,
      filePath,
    }
  })

  return { props: { notes } }
}
