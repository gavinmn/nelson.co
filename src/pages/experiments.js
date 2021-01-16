import React from "react"
import styled from "styled-components"
import Image from "next/image"
import PostWrapper from "../components/postwrapper"
import CustomImage from "../components/customimage"
import StyledLink from "../components/styledlink"
import { device } from "../components/device"

const Experiments = props => (
  <PostWrapper
    title="Experiments"
    subtitle="A playground for testing things"
    time="Jan 16, 2021"
  >
    {/* <CustomImage
	  size="full"
	  src="/images/"
	  width="816"
	  height="392"
	/> */}

    <h3>Section</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. <br></br>
      <br></br>Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.
    </p>

    <h3>Code Styling</h3>
    <p>
      This is the code you want to use. <code>push()</code> Testing testing
      testing.
      <ul>
        <li>List item one</li>
        <li>
          List item two
          <ul>
            <li>List item two description.</li>
          </ul>
          <li>
            List item three.
            <ul>
              <li>List item three description.</li>
            </ul>
          </li>
        </li>
      </ul>
    </p>
  </PostWrapper>
)

export default Experiments
