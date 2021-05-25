const Tool = () => (
  <div className="container">
    <div className="icon"></div>
    <div className="text-container">
      <p>App Name</p>
      <p className="description">
        Description of what I use it for and maybe why I like it.
      </p>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: var(--primary-3s00);
      }

      .icon {
        height: 96px;
        width: 96px;
        margin-right: 0.5rem;
        border-radius: 4px;
        background-color: var(--primary-200);
      }

      .description {
        color: var(--text-accent);
      }
    `}</style>
  </div>
)

export default Tool
