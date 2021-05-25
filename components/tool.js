import Link from "next/link"

const Tool = () => (
  <Link href="/">
    <a className="container">
      <div className="icon"></div>
      <div className="text-container">
        <p className="name">App Name</p>
        <p className="description">
          Description of what I use it for and maybe why I like it.
        </p>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          border-radius: 4px;
        }
        @media only screen and (min-width: 768px) {
          .container {
            padding: 0.5rem;
          }
        }

        .container:hover {
          background-color: var(--button-hover);
        }

        .icon {
          height: 96px;
          width: 96px;
          margin-right: 0.5rem;
          border-radius: 4px;
          background-color: var(--primary-200);
        }

        .name {
          color: var(--text-primary);
        }

        .description {
          color: var(--text-accent);
        }
      `}</style>
    </a>
  </Link>
)

export default Tool
