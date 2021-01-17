import React from "react"
import styled from "styled-components"
import Image from "next/image"
import PostWrapper from "../components/postwrapper"
import CustomImage from "../components/customimage"
import StyledLink from "../components/styledlink"
import { device } from "../components/device"

const Typography = props => (
  <PostWrapper title="" subtitle="" time="">
    <h1>H1 Headline</h1>
    <h2>H2 Subheadline</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend
      donec pretium vulputate sapien nec. At imperdiet dui accumsan sit amet
      nulla facilisi morbi. Viverra aliquet eget sit amet tellus cras adipiscing
      enim eu. Euismod in pellentesque massa placerat duis ultricies lacus sed
      turpis.
    </p>

    <h2>H2 Subheadline</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend
      donec pretium vulputate sapien nec. At imperdiet dui accumsan sit amet
      nulla facilisi morbi. Viverra aliquet eget sit amet tellus cras adipiscing
      enim eu. Euismod in pellentesque massa placerat duis ultricies lacus sed
      turpis.
    </p>

    <h3>H3 Subheadline</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend
      donec pretium vulputate sapien nec. At imperdiet dui accumsan sit amet
      nulla facilisi morbi. Viverra aliquet eget sit amet tellus cras adipiscing
      enim eu. Euismod in pellentesque massa placerat duis ultricies lacus sed
      turpis.
    </p>
  </PostWrapper>
)

export default Typography
