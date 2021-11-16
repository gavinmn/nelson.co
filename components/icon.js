import Image from "next/image"
import ArrowDown from "@/components/svg/arrowdown.js"
import ArrowRight from "@/components/svg/arrowright.js"

const Icon = props => {
  let downloadArrow = false
  let noArrow = false

  if (props.arrow === "download") {
    downloadArrow = true
  }

  if (props.arrow === "none") {
    noArrow = true
  }

  return (
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
          <a
            className={
              noArrow ? "no-underline hover:text-secondary" : "underline"
            }
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.title}
            <div
              className={
                noArrow ? "hidden" : downloadArrow ? "hidden" : "inline"
              }
            >
              <ArrowRight />
            </div>
            <div
              className={
                noArrow ? "hidden" : downloadArrow ? "inline" : "hidden"
              }
            >
              <ArrowDown />
            </div>
          </a>
        </div>
        <p className="text-tertiary">{props.subtitle}</p>
      </div>
    </div>
  )
}

export default Icon
