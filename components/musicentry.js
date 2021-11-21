import Image from "next/image"

const MusicEntry = props => (
  <div className="flex flex-col items-start md:flex-row">
    <a
      className="m-w-256 m-h-256"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      alt="album artwork"
      aria-label="album artwork"
    >
      <Image
        className="rounded-sm"
        src={props.src}
        width={256}
        height={256}
        alt=""
      />
    </a>
    <div className="flex flex-row self-stretch justify-between mt-2 md:flex-col-reverse md:mt-0 md:ml-2">
      <div className="flex flex-col items-start self-stretch justify-end m-w-256">
        <p className="self-stretch">{props.title}</p>
        <p className="self-stretch">{props.artist}</p>
      </div>
    </div>
  </div>
)

export default MusicEntry
