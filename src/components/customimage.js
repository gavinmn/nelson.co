import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Image from "next/image"
import { device } from "./device"

const CustomImageContainer = styled.div`
  width: 100%;
  margin: 2rem auto;
  max-width: ${props => (props.full ? "816px" : "444px")};

  @media ${device.desktop} {
    margin: ${props => (props.full ? "1rem auto" : "1rem auto")};
  }

  @media only screen and (min-width: 848px) {
    width: ${props => (props.full ? "200%" : "")};
    margin: ${props => (props.full ? "1rem -3rem" : "1rem auto")};
  }
`

const CustomImage = props => {
  const [full, setFull] = useState(false)

  useEffect(() => {
    if (props.size == "full") {
      setFull(true)
    } else {
      setFull(false)
    }
  }, [props.size])

  return (
    <CustomImageContainer width={props.size} full={full}>
      <Image
        src={props.src}
        alt=""
        width={`${props.width}`}
        height={`${props.height}`}
      />
    </CustomImageContainer>
  )
}

export default CustomImage
