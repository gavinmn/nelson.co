import Link from "next/link"
import Image from "next/image"
import Caption from "./caption"
import CustomImage from "./customimage"

const CustomLink = props => {
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

const MarkdownComponents = {
  Image,
  CustomImage,

  a: CustomLink,
  h4: Caption,
}

export default MarkdownComponents
