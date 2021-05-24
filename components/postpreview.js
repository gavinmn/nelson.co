import Link from "next/link"

const PostPreview = props => (
  <Link as={`posts/${props.href}`} href="/posts/[slug]">
    <a className="container">
      <h3 className="title">{props.title}</h3>
      <p className="date">{props.date}</p>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding: 1rem;

          transition: background-color 250ms ease-in-out;
        }

        @media only screen and (min-width: 768px) {
          .container {
            padding: 0.5rem;
          }
        }

        .container:hover {
          background-color: var(--button-hover);
          border-radius: 4px;
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

export default PostPreview
