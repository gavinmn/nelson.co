import Link from "next/link"
import Caption from "@/components/caption"

const PostPreview = props => (
  <div className="container">
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .title {
        color: var(--text-primary);
        margin: 0;
      }
      .title:hover {
        color: var(--text-accent);
        cursor: pointer;
      }

      .date {
        flex-grow: 0;
        font-size: var(--small);
      }
    `}</style>

    <p className="date">{props.date}</p>
    <Link as={`posts/${props.href}`} href="/posts/[slug]">
      <h3 className="title">{props.title}</h3>
    </Link>
  </div>
)

export default PostPreview
