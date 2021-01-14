import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import { device } from "../components/device"

const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--bg-secondary);
  border-radius: 12px;
  max-width: 100%;
  height: 397px;
  overflow: hidden;

  @media ${device.desktop} {
    max-width: ${props => (props.doubleWidth ? "816px" : "408px")};
    grid-column: ${props => (props.doubleWidth ? "1 / span 2" : "")};
  }
`

const CardImageContainer = styled.div`
  height: 294px;
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
  margin-top: 12px;
  align-self: stretch;
`

const Text = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 8px;
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
    <CardBase width={props.width} doubleWidth={doubleWidth}>
      <CardImageContainer>
        <Image
          src={props.imageSrc}
          alt=""
          width={`${props.imageWidth}`}
          height={`${props.imageHeight}`}
          layout="fixed"
        />
      </CardImageContainer>
      <BottomSection>
        <Text>
          <h1>{props.title}</h1>
          <h2>{props.subtitle}</h2>
          <h2>
            <i>{props.time}</i>
          </h2>
        </Text>
        {props.children}
      </BottomSection>
    </CardBase>
  )
}

export default Card
