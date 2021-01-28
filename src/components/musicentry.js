import React from "react"
import styled from "styled-components"
import { device } from "../components/device"
import Image from "next/image"

const Entry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${device.desktop} {
    flex-direction: row;
  }
`

const Details = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  justify-content: space-between;
  align-self: stretch;

  @media ${device.desktop} {
    flex-direction: column-reverse;
    margin-top: 0;
    margin-left: 0.5rem;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  align-self: stretch;

  max-width: 256px;

  @media ${device.desktop} {
    margin-bottom: -0.17rem;
  }
`

const Arrow = styled.p`
  font-size: var(--font-m);
  opacity: 0;
  transition-duration: 0.3s;
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

  &:hover + div .arrow {
    opacity: 1;
  }
`

const MusicEntry = props => (
  <Entry>
    <ArtLink
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      alt=""
      aria-label=""
    >
      <Art src={props.src} width={256} height={256} alt="" aria-label="" />
    </ArtLink>
    <Details>
      <Info>
        <Title>{props.title}</Title>
        <Artist>{props.artist}</Artist>
      </Info>
      <Arrow className="arrow">→</Arrow>
    </Details>
  </Entry>
)

export default MusicEntry
