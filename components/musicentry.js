import { device } from "../components/device"
import Image from "next/image"

const MusicEntry = props => (
  <div className="entry">
    <style jsx>{`
      .entry {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
      .details {
        display: flex;
        flex-direction: row;
        margin-top: 0.5rem;
        justify-content: space-between;
        align-self: stretch;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        align-self: stretch;

        max-width: 256px;
      }

      .arrow {
        font-size: var(--h2);
        opacity: 0;
        transition-duration: 0.3s;
      }

      .title {
        align-self: stretch;
      }

      .artist {
        color: var(--text-secondary);
        align-self: stretch;
      }

      .art {
        border-radius: 2px;
      }

      .art-link {
        max-width: 256px;
        max-height: 256px;
        text-decoration: none;
        background-image: none;
      }

      .art-link:hover + div .arrow {
        opacity: 1;
      }

      @media ${device.desktop} {
        .entry {
          flex-direction: row;
        }
        .details {
          flex-direction: column-reverse;
          margin-top: 0;
          margin-left: 0.5rem;
        }

        .info {
          margin-bottom: -0.17rem;
        }
      }
    `}</style>
    <a
      className="art-link"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      alt="album artwork"
      aria-label="album artwork"
    >
      <Image className="art" src={props.src} width={256} height={256} alt="" />
    </a>
    <div className="details">
      <div className="info">
        <p className="title">{props.title}</p>
        <p className="artist">{props.artist}</p>
      </div>
      <p className="arrow">→</p>
    </div>
  </div>
)

export default MusicEntry
