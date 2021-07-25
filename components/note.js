import Link from "next/link"

const Note = props => (
  <Link as={`notes/${props.href}`} href="notes/[slug]">
    <a className="container">
      <h3 className="title">{props.title}</h3>
      <p className="date">{props.date}</p>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          border-radius: 4px;
          transition: background-color 150ms ease-in-out;
        }

        @media only screen and (min-width: 768px) {
          .container {
            padding: 0.5rem;
          }
        }

        .container:hover {
          background-color: var(--button-hover);
        }

        .title {
          color: var(--text-primary);
          margin: 0;
        }

        .date {
          font-size: var(--small);
          color: var(--text-accent);
        }
      `}</style>
    </a>
  </Link>
)

export default Note
