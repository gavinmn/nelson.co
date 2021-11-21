import Link from "next/link"

export const CustomLink = props => {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} />
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

export const Br = () => <div className="h-4"></div>

export const HorizontalRule = () => (
  <div className="flex flex-row content-center justify-center my-3">
    <p className="text-tertiary opacity-40">• • • •</p>
  </div>
)
