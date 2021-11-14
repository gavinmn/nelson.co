import Image from "next/image"
const Icon = props => (
  <div className="flex flex-col">
    <div className="overflow-hidden rounded-sm">
      <Image
        quality="100"
        placeholder="blur"
        width={400}
        height={400}
        src={props.src}
      />
    </div>
    <div className="flex flex-col">
      <div className="flex flex-row">
        <p>{props.title}</p>
      </div>
      <p className="text-tertiary">{props.subtitle}</p>
    </div>
  </div>
)

export default Icon
