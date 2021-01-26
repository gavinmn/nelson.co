import React from "react"
import styled from "styled-components"
import { device } from "../components/device"
import Image from "next/image"

const Entry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.desktop} {
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;

  max-width: 256px;
  margin-top: 0.5rem;

  @media ${device.desktop} {
     {
      /* margin: 0 0 -0.17rem 0.5rem;
    max-width: 270px; */
    }
  }
`

const Title = styled.p`
  align-self: stretch;
`

const Artist = styled.p`
  color: var(--text-secondary);
  align-self: stretch;
`

const Art = styled(Image)`
  border-radius: 2px;
`

const ArtLink = styled.a`
  max-width: 256px;
  max-height: 256px;
  text-decoration: none;
  background-image: none;
`

const MusicEntry = props => (
  <Entry>
    <ArtLink href={props.link} target="_blank" rel="noopener noreferrer">
      <Art src={props.src} width={256} height={256} />
    </ArtLink>
    <Info>
      <Title>{props.title}</Title>
      <Artist>{props.artist}</Artist>
    </Info>
  </Entry>
)

export default MusicEntry
