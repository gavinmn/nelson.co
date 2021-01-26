import React from "react"
import styled from "styled-components"
import { device } from "../components/device"
import Image from "next/image"

const Entry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 4rem;

  @media ${device.desktop} {
    margin-bottom: 2rem;
    flex-direction: row;
    align-items: flex-end;
    width: 624px;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 1;
  margin-top: 0.5rem;

  @media ${device.desktop} {
    margin: 0 0 -0.17rem 0.5rem;
    max-width: 270px;
  }
`

const Title = styled.p`
  align-self: stretch;
`

const Artist = styled.p`
  color: var(--text-secondary);
  align-self: stretch;
  flex-grow: 0;
`

const Art = styled(Image)`
  border-radius: 2px;
`

const ArtLink = styled.a`
  max-width: 338px;
  max-height: 338px;
`

const MusicEntry = props => (
  <Entry>
    <ArtLink href={props.link} target="_blank" rel="noopener noreferrer">
      <Art src={props.src} width={338} height={338} />
    </ArtLink>
    <Info>
      <Title>{props.title}</Title>
      <Artist>{props.artist}</Artist>
    </Info>
  </Entry>
)

export default MusicEntry
