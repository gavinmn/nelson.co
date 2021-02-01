import React from "react"
import styled from "styled-components"
import Image from "next/image"
import { device } from "./device"

import Wrapper from "./wrapper"
import Caption from "./caption"
import MusicEntry from "./musicentry"

const Container = styled.div`
  margin: 8rem auto;
  max-width: 338px;

  @media ${device.desktop} {
    margin: 4rem 0 0 0;
    max-width: 624px;
  }
`
const MusicThreadLink = styled.a`
  font-size: var(--font-xs);
  color: var(--text-secondary);
  &:hover {
    color: var(--text-primary);
  }
`

const Timeline = styled.div`
  margin-top: 2rem;
`

const MonthContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 4rem;
  margin-top: 2rem;

  @media ${device.desktop} {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`

const Line = styled.div`
  background-color: var(--bg-secondary);
  width: 4px;
  align-self: stretch;

  margin-top: -1.5rem;
  @media ${device.desktop} {
    margin-top: -0.75rem;
  }
`
const MusicContainer = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin: 0 auto;
  @media ${device.desktop} {
    margin: 0 0 0 1rem;
    grid-gap: 1rem;
  }
`

const Month = styled.p`
  font-style: italic;
`

const MusicThread = props => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const formattedData = props.links.reduce((carry, item) => {
    const timestamp = new Date(item.submitted_at)

    const monthYearStamp = `${
      monthNames[timestamp.getMonth()]
    }, ${timestamp.getFullYear()}`

    if (monthYearStamp in carry) {
      carry[monthYearStamp].push(item)
    } else {
      carry[monthYearStamp] = [item]
    }

    return carry
  }, {})
  const dateKeys = Object.keys(formattedData)

  return (
    <Wrapper size="large">
      <Wrapper size="small">
        <Container>
          <h1>{props.title}</h1>

          <Caption>
            {props.subtitle}, powered by{" "}
            <MusicThreadLink href="https://musicthread.app/">
              MusicThread
            </MusicThreadLink>
          </Caption>
          <Timeline>
            {dateKeys.map((entry, key) => {
              return (
                <>
                  <Month>{entry}</Month>
                  <MonthContainer>
                    <Line />
                    <MusicContainer>
                      {formattedData[entry].map((data, key) => {
                        return (
                          <MusicEntry
                            key={data.key}
                            link={data.page_url}
                            src={data.thumbnail_url}
                            title={data.title}
                            artist={data.artist}
                          />
                        )
                      })}
                    </MusicContainer>
                  </MonthContainer>
                </>
              )
            })}
          </Timeline>
        </Container>
      </Wrapper>
    </Wrapper>
  )
}

export default MusicThread
