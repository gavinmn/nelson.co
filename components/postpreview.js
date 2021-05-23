import Link from "next/link"
import Caption from "@/components/caption"

const PostPreview = props => (
  <div className="container">
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: none;
        align-self: stretch;
      }

      .title {
        color: var(--text-accent);
         {
          /* font-size: var(--large); */
        }
        font-weight: bold;
        margin: 0;
      }
      .title:hover {
        color: var(--text-primary);
        cursor: pointer;
      }

      .subtitle {
        margin: 0;
        flex: none;
        align-self: stretch;
        flex-grow: 0;
      }

      .caption {
        font-size: var(--small);
        color: var(--text-accent);
      }
    `}</style>

    <div className="text">
      <Link as={`posts/${props.href}`} href="/posts/[slug]">
        <h2 className="title">{props.title}</h2>
      </Link>
      <p className="subtitle">{props.subtitle}</p>
    </div>
    <p className="caption">{props.time}</p>
  </div>
)

export default PostPreview
