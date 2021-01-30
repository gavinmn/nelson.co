import React from "react"
import Link from "next/link"
import Image from "next/image"
import Caption from "@/components/caption"
import CustomImage from "@/components/customimage"
import Ztext from "react-ztext"
import Cube from "@/components/posts/cube"
import ZContainer from "@/components/posts/zcontainer"
import styled from "styled-components"

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
  Caption,
  a: CustomLink,
  h4: Caption,
}

export default MarkdownComponents
