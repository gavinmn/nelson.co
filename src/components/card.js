import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Image from "next/image"

const NextImageContainer = styled.div`
  width: 392px;
  height: 294px;
  background-color: var(--blue-secondary);
  justify-self: center;
`

const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 16px;
  background-color: var(--bg-secondary);
  border-radius: 8px;
  max-width: ${props => (props.doubleWidth ? "816px" : "408px")};
  height: 397px;
  overflow: hidden;
`

const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-grow: 0;
  box-shadow: 0px 4px 0px var(--bg-primary-rgba);
  background-color: var(--bg-secondary);
`

const BottomSection = styled.div`
  display: flex;
  flex-grow: 0;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px;
  margin-top: 20px;
  align-self: stretch;
`

const Text = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
`

const Button = styled.div`
  display: flex;
  flex-grow: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--blue-secondary);
  border-radius: 4px;

  &:hover {
    cursor: pointer;
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

const Card = props => {
  const [doubleWidth, setDoubleWidth] = useState(false)

  useEffect(() => {
    if (props.width == "double") {
      setDoubleWidth(true)
    } else {
      setDoubleWidth(false)
    }
  }, [props.width])

  return (
    <div>
      <CardBase width={props.width} doubleWidth={doubleWidth}>
        <CardImageContainer>
          <NextImageContainer>
            {/* <Image
          src={props.image}
          width={props.imageWidth}
          height={props.imageHeight}
        /> */}
          </NextImageContainer>
        </CardImageContainer>
        <BottomSection>
          <Text>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <h3>
              <i>{props.time}</i>
            </h3>
          </Text>
          <Button>
            <Arrow>􀰑</Arrow>
          </Button>
        </BottomSection>
      </CardBase>
    </div>
  )
}

export default Card
