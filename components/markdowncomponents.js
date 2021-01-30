import React from "react"
import Link from "next/link"
import Image from "next/image"
import CustomImage from "@/components/customimage"
import Ztext from "react-ztext"
import Cube from "@/components/posts/cube"

import styled from "styled-components"
import Test from "@/components/test/test"

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

const HeadingFour = styled.p`
  font-size: ${props => props.theme.fontSmall};
`

const MarkdownComponents = {
  Image,
  CustomImage,
  Ztext,
  a: CustomLink,
  h4: Test,
}

export default MarkdownComponents
