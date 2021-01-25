import React from "react"
import Link from "next/link"
import styled from "styled-components"

const Button = styled.a`
  background-image: none;
  text-shadow: none;
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  background-color: var(--bg-primary-hex);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    background-color: var(--text-secondary);
    & > p {
      color: var(--bg-primary-hex);
    }
  }
`

const Arrow = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: var(--text-secondary);
`

const ButtonInternal = props => (
  <Link href={props.link} passhref>
    <Button>
      <Arrow>→</Arrow>
    </Button>
  </Link>
)
export default ButtonInternal
