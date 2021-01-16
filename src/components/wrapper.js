import React, { useState, useEffect } from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  max-width: ${props => (props.large ? "816px" : "624px")};
  margin: 0 auto;
  padding: ${props => (props.large ? "0 5% 0 5%" : "0")};
  // overflow: hidden;
`

const Wrapper = props => {
  const [large, setLarge] = useState(true)

  useEffect(() => {
    if (props.size == "small") {
      setLarge(false)
    } else {
      setLarge(true)
    }
  }, [props.size])

  return (
    <StyledWrapper size={props.size} large={large}>
      {props.children}
    </StyledWrapper>
  )
}

export default Wrapper
