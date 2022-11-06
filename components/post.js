import Link from "next/link"

const Post = props => (
  <div className="grid grid-cols-118-auto">
    <p className=" text-tertiary dark:text-darkTertiary">{props.date}</p>
    <Link
      as={`posts/${props.href}`}
      href="posts/[slug]"
      className="text-secondary dark:text-darkSecondary">
      {props.title}
    </Link>
  </div>
)

export default Post
