import Image from "next/image"

const Tool = props => (
  <a
    className="container"
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="icon">
      <Image
        src={`/images/tools/${props.image}`}
        width="80px"
        height="80px"
        alt=""
      ></Image>
    </div>
    <div className="text-container">
      <div className="title-container">
        <p className="name">{props.name}</p>
        <p className="arrow">→</p>
      </div>
      <p className="description">{props.description}</p>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 1rem 0;
        border-radius: 4px;
      }

      .container:hover {
        background-color: transparent;
      }

      @media only screen and (min-width: 768px) {
        .container {
          padding: 0.5rem;
          margin: 1rem -0.5rem;
          align-items: center;
        }
      }

      .icon {
        margin-right: 1rem;
        overflow: hidden;
        flex-shrink: 0;
      }

      .title-container {
        display: flex;
        flex-direction: row;
      }

      .arrow {
        font-size: var(--body);
        font-weight: bold;
        color: var(--accent-100);
        margin-left: 0.25rem;
        opacity: 0;
        transition-duration: 0.3s;
      }

      .container:hover > div > div > .arrow {
        opacity: 1;
        margin-left: 0.5rem;
      }

      @media only screen and (min-width: 768px) {
        .icon {
          margin-right: 0.75rem;
        }

        .arrow {
          margin-left: 0.125rem;
        }
        .container:hover > div > div > .arrow {
          margin-left: 0.25rem;
        }
      }

      .name {
        color: var(--text-primary);
      }

      .description {
        color: var(--text-accent);
      }
    `}</style>
  </a>
)

export default Tool
