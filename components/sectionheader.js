import { device } from "@/components/device"

const SectionHeader = props => (
  <div className="container">
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        margin: 4rem 0 1rem 0;
        padding: 0px 1rem;
      }

      @media ${device.desktop} {
        .container {
          margin: 2rem 0 0.5rem 0;
          padding: 0px 0.5rem;
        }
      }
    `}</style>

    <h1>{props.section}</h1>
    {props.children}
  </div>
)

export default SectionHeader
