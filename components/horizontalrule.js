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
        color: var(--text-underline);
      }
    `}</style>
    <p className="dots">• • • •</p>
  </div>
)

export default HorizontalRule