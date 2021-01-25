import React from "react"
import styled from "styled-components"
import { device } from "../components/device"
import Image from "next/image"

const MusicThread = ({ data }) => {
  return (
    <div>
      {data.links.map((data, key) => {
        return (
          <div key={key}>
            <p>{data.title}</p>
            <p>{data.artist}</p>
            <Image src={data.thumbnail_url} layout="fill" />
          </div>
        )
      })}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://musicthread.app/api/v0/thread/1mhhP6pYnnOic8X8SvzJxPsikRU`
  )
  const data = await res.json()

  return { props: { data } }
}

export default MusicThread
