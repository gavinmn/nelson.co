import React from "react"
import styled from "styled-components"
import Image from "next/image"
import PostWrapper from "../components/postwrapper"
import CustomImage from "../components/customimage"
import { device } from "../components/device"
import Caption from "../components/caption"

const Typography = props => (
  <PostWrapper title="" subtitle="" time="">
    <h1>Typographic Scale Test</h1>
    <Caption>Updated January 16, 2021</Caption>
    <p>
      Much urgently jeez beheld therefore unblushingly dreadfully around dense
      one that much drew much and that and smirked combed tolerant near that
      convenient since indescribable shoddily shut a alas blanched yikes much
      and stole swelled. <br></br>
      <br></br> Contrary and indiscriminate far hippopotamus ambiguously much
      eccentric one winning articulately mournful gosh more that according
      elaborate beyond.
    </p>

    <h2>Title of this Section</h2>
    <p>
      Crane much hey punctiliously amongst anteater remarkable seagull guinea
      hungry jeez <br></br>
      <br></br> <code>const [a, setA] = useState(true)</code>
      <br></br>
      <br></br>specially hummed outside led hello frailly the gulped yikes
      following toucan that after gallant unbridled coquettishly oh so.
      <ul>
        <li>
          Smirked combed tolerant near that convenient since indescribable
          shoddily shut a alas.
        </li>
        <li>
          Some willful far much oh immoral arose.
          <ul>
            <li>
              Specially hummed <code>cmd + a</code> outside led hello frailly
              the gulped yikes
            </li>
          </ul>
          <li>Much drew much and that and smirked combed tolerant near that</li>
        </li>
      </ul>
      Contrary and indiscriminate far hippopotamus ambiguously much eccentric{" "}
      one winning articulately mournful gosh more that according elaborate
      beyond.
    </p>

    <h3>Subsection Title</h3>
    <p>
      Dived zealously luxuriant jay hello since cut compactly hello this redid
      spoiled fancifully in thus along beside elusive instantaneously quetzal
      unicorn after proved followed some willful far much oh immoral arose stung
      much more that where before hatchet ostrich and outdid and octopus recast.
    </p>
  </PostWrapper>
)

export default Typography
