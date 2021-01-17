import React from "react"
import styled from "styled-components"
import Image from "next/image"
import PostWrapper from "../components/postwrapper"
import CustomImage from "../components/customimage"
import { device } from "../components/device"
import Caption from "../components/caption"

const Typography = props => (
  <PostWrapper title="" subtitle="" time="">
    <h1>Title of my Post</h1>
    <Caption>Published January 16, 2021</Caption>
    <p>
      Other data driven details of the reworked UI/UX include rings around the
      group avatars to indicate other users’ active modes, colored message
      bubbles to further provide context on what mode the user is currently in,
      as well as a redesigned header to better comply with mobile design
      standards.
    </p>

    <h2>Second Section of my Post</h2>
    <p>
      User testing these prototypes brought some important learnings to the
      forefront. The volume slider model was discoverable, but was initially a
      bit confusing to users. The full screen swipe was not highly discoverable
      and conflicted with many common iOS gestures already ingrained in users.
      Finally the action button model had decent discoverability, but would
      require some tweaking to have better usability.
    </p>

    <h3>Third Subsection Here</h3>
    <p>
      This graph plotted each idea in terms of how easy it would be for users to
      adopt against how well it would fit in Chalk’s development timeline. From
      my user testing and the teams best estimates, the action button model was
      show to be the winner.
    </p>
  </PostWrapper>
)

export default Typography
