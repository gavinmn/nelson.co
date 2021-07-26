import Layout from "@/components/layout"
import SEO from "@/components/seo"

const Notes = ({ notes }) => {
  return (
    <Layout>
      <SEO
        title="Gavin's notes"
        og="notesog.png"
        description="A digital garden, currently being planted."
      />
      <div className="container">
        <div className="wrapper">
          <div className="preview">
            <p className="emoji">🌱</p>
            <p className="text">Planting in progress</p>
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
        .preview {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 80vh;
        }
        .emoji {
          font-size: 2rem;
        }
        .text {
          color: var(--text-accent);
        }
      `}</style>
    </Layout>
  )
}

export default Notes
