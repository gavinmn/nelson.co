import { device } from "@/components/device"

const Caption = props => {
  return (
    <p>
      {props.children}
      <style jsx>{`
        font-size: var(--font-xs);
        line-height: var(--lh-xs);
        font-weight: normal;
        font-style: italic;
        margin-bottom: 1rem;
        color: var(--text-secondary);

        @media ${device.desktop} {
          font-size: var(--font-xs);
          line-height: var(--lh-xs);
          font-weight: normal;
          font-style: italic;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
        }
      `}</style>
    </p>
  )
}

export default Caption
