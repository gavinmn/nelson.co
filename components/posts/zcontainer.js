import React from "react"

import { device } from "../device"

const ZContainer = props => (
  <div>
    {props.children}
    <style jsx>{`
      margin: 1.5rem auto 0.25rem auto;
      display: flex;
      justify-content: center;
      align-items: center;

      @media ${device.desktop} {
        margin: 2rem auto 1.1rem auto;
      }
    `}</style>
  </div>
)

export default ZContainer
