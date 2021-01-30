import { device } from "@/components/device"

const Cube = props => (
  <svg>
    {props.children}{" "}
    <style jsx>{`
      width: 80px;
      height: 80px;
      @media ${device.desktop} {
        width: 160px;
        height: 160px;
      }
    `}</style>{" "}
  </svg>
)

export default Cube
