import React from "react"
import styled from "styled-components"
import Link from "next/link"
import { device } from "@/components/device"
import Caption from "@/components/caption"

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  align-self: stretch;
`
const Title = styled.h2`
  color: var(--text-secondary);
  margin: 0;

  &:hover {
    color: var(--text-primary);
    cursor: pointer;
  }
`

const Subtitle = styled.p`
  margin: 0;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
`

const Post = props => (
  <FlexContainer>
    <TitleText>
      <Link href={`posts/${props.slug}`}>
        <Title>{props.title}</Title>
      </Link>
      <Subtitle>{props.subtitle}</Subtitle>
    </TitleText>
    <Caption>{props.time}</Caption>
  </FlexContainer>
)

export default Post
