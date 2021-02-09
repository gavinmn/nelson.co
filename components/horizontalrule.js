const HorizontalRule = props => (
  <div className="container">
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-content: center;
        margin: 0.75rem 0;
      }
      .dots {
        color: var(--text-secondary);
        font-size: var(--font-s);
        opacity: 0.4;
      }
    `}</style>
    <div className="dots">• • • •</div>
  </div>
)

export default HorizontalRule
