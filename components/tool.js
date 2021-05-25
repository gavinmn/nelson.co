import Link from "next/link"
import Image from "next/image"

const Tool = props => (
  <Link href={props.link} passHref>
    <a className="container">
      <div className="icon">
        <Image
          src={`/images/tools/${props.image}`}
          width="80px"
          height="80px"
        ></Image>
      </div>
      <div className="text-container">
        <p className="name">{props.name}</p>
        <p className="description">{props.description}</p>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 1rem;
          margin: 2rem -1rem;
          border-radius: 4px;
        }
        @media only screen and (min-width: 768px) {
          .container {
            padding: 0.5rem;
            margin: 1rem -0.5rem;
          }
        }

        .container:hover {
          background-color: var(--button-hover);
        }
        .icon {
          margin-right: 0.5rem;
          border-radius: 4px;
          overflow: hidden;
          flex-shrink: 0;
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
