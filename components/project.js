import Link from "next/link"

const Project = props => (
  <Link href={props.href}>
    <a className="container">
      <h3 className="title">{props.title}</h3>
      <p className="description">{props.description}</p>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          border-radius: 4px;
          transition: background-color 150ms ease-in-out;
          grid-column: 1 / span 2;
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

export default Project
