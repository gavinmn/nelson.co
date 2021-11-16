import Image from "next/image"
import ArrowDown from "@/components/svg/arrowdown.js"
import ArrowRight from "@/components/svg/arrowright.js"

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
      <div className="flex flex-row items-center -mb-1">
        <a className="group">
          {props.title}
          <ArrowRight />
        </a>
      </div>
      <p className="text-tertiary">{props.subtitle}</p>
    </div>
  </div>
)

export default Icon
