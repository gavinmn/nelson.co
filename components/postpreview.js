import Link from "next/link"

const PostPreview = props => (
  <div className="container">
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
      }

      .title {
        color: var(--text-primary);
        margin: 0;
        margin-bottom: 0.125rem;
      }
      .title:hover {
        color: var(--text-accent);
        cursor: pointer;
      }

      .date {
        font-size: var(--small);
        margin-right: 1rem;
        color: var(--text-accent);
      }
    `}</style>

    <Link as={`posts/${props.href}`} href="/posts/[slug]">
      <h3 className="title">{props.title}</h3>
    </Link>
    <p className="date">{props.date}</p>
  </div>
)

export default PostPreview
