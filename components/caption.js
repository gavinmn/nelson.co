import { device } from "@/components/device"

const Caption = props => {
  return (
    <p>
      {props.children}
      <style jsx>{`
        font-size: var(--small);
        line-height: var(--lh-xs);
        font-weight: normal;
        margin-bottom: 1rem;
        color: var(--text-accent);

        @media ${device.desktop} {
          font-size: var(--small);
          line-height: var(--lh-xs);
          font-weight: normal;
          margin-bottom: 0.5rem;
          color: var(--text-accent);
        }
      `}</style>
    </p>
  )
}

export default Caption
