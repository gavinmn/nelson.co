import React from "react"
import Link from "next/link"
import Image from "next/image"
import CustomImage from "@/components/customimage"
import Ztext from "react-ztext"
import Cube from "@/components/posts/cube"

import styled from "styled-components"

import TestComponent from "@/components/test/testcomponent"

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
  Ztext,
  TestComponent,
  a: CustomLink,
}

export default MarkdownComponents
