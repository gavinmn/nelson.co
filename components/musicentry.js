import Image from "next/legacy/image";
import { ArrowExternal } from "./svg"
const MusicEntry = props => (
  <div className="flex flex-col items-start md:flex-row">
    <Image
      className="rounded-sm"
      src={props.src}
      width={256}
      height={256}
      alt=""
    />

    <div className="flex flex-row self-stretch justify-between mt-2 md:flex-col-reverse md:mt-0 md:ml-2">
      <div className="flex flex-col items-start self-stretch justify-end max-w-256">
        <a
          className="max-w-full md:max-w-256 md:max-h-256"
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          alt="album artwork"
          aria-label="album artwork"
        >
          {props.title}
          <ArrowExternal />
        </a>
        <p className="self-stretch text-tertiary dark:text-darkTertiary">
          {props.artist}
        </p>
      </div>
    </div>
  </div>
)

export default MusicEntry
