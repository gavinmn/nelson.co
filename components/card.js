import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Image from "next/image"
import { device } from "@/components/device"

const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--bg-secondary);
  border-radius: 8px;
  max-width: 100%;
  padding-bottom: 8px; 
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
  padding: 0px 1rem;
  margin-top: 12px;
  align-self: stretch;
  @media ${device.desktop} {
    padding: 0px 0.5rem;
  }
`

const Text = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 8px;
`

const Subtext = styled.p`
  font-size: var(--font-xs);
  line-height: var(--lh-xs);
  color: var(--text-secondary);
`

const HeaderText = styled.h2`
  margin: 0;
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
          <HeaderText>{props.title}</HeaderText>
          <Subtext>{props.subtitle}</Subtext>
          <Subtext>
            <i>{props.time}</i>
          </Subtext>
        </Text>
        {props.children}
      </BottomSection>
    </CardBase>
  )
}

export default Card
