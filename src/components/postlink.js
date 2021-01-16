import React from "react"
import styled from "styled-components"

const LinkStyle = styled.a`
  color: var(--text-secondary);

  &:hover {
    color: var(--color-primary);
    text-decoration: underline;
    text-decoration-color: var(--color-primary);
    cursor: pointer;
  }
`

const PostLink = props => (
  <LinkStyle href={props.link} target="_blank" rel="noopener noreferrer">
    {props.children}
  </LinkStyle>
)

export default PostLink
