import React from "react"
import styled from "styled-components"
import { device } from "../components/device"

const MusicThread = ({ data }) => {
  console.log(data.links[1].artist)
  return <div></div>
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://musicthread.app/api/v0/thread/1mhhP6pYnnOic8X8SvzJxPsikRU`
  )
  const data = await res.json()

  return { props: { data } }
}

export default MusicThread
