import Image from "next/image"
const Icon = props => (
  <div className="flex flex-col">
    <Image
      className="overflow-hidden rounded-sm"
      alt=""
      quality="100"
      placeholder="blur"
      width={`${props.width}`}
      height={400}
      src={props.src}
    />
    <div className="flex flex-col mt-2">
      <div className="flex flex-row">
        <p>{props.title}</p>
      </div>
      <p className="text-tertiary">{props.subtitle}</p>
    </div>
  </div>
)

export default Icon
