import React from "react"
import styled from "styled-components"

const Button = styled.a`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  background-color: var(--blue-secondary);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
    text-decoration: none;
    background-color: var(--blue-primary);
    & > p {
      color: var(--bg-primary-hex);
    }
  }
`

const Arrow = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: var(--blue-primary);
`

const ButtonExternal = props => (
  <Button href={props.link} target="_blank" rel="noopener noreferrer">
    <Arrow>→</Arrow>
  </Button>
)
export default ButtonExternal
