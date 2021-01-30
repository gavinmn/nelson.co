import React from "react"
import Link from "next/link"
import Image from "next/image"
import Caption from "./caption"
import CustomImage from "@/components/customimage"
import ZText from "react-ztext"
import Cube from "@/components/posts/cube"
import ZContainer from "@/components/posts/zcontainer"

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
  Cube,
  ZContainer,
  ZText,

  a: CustomLink,
  h4: Caption,
}

export default MarkdownComponents
