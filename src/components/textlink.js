import React from "react"
import styled from "styled-components"

const LinkStyle = styled.a`
  font-size: var(--font-s);
  text-decoration: none;
  color: var(--text-primary);
  font-weight: normal;

  background-image: linear-gradient(
    var(--text-underline),
    var(--text-underline)
  );

  background-size: 100% 1px;
  background-position: left 1.15em;
  background-repeat: no-repeat;

  &:hover {
    text-shadow: 0.1em 0 var(--bg-primary-hex), -0.1em 0 var(--bg-primary-hex);
    color: var(--text-secondary);
    text-decoration: none;
    cursor: pointer; 
  }
`

const TextLink = props => (
  <LinkStyle href={props.link}>
    {props.children}
  </LinkStyle>
)

export default TextLink
