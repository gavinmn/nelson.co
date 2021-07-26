import { device } from "@/components/device"

const Customp = props => {
  return (
    <p>
      {props.children}
      <style jsx>{`
        margin-bottom: 1rem;

        @media ${device.desktop} {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </p>
  )
}

export default Customp
