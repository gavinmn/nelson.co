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
    <div className="flex flex-col items-start max-w-full overflow-hidden">
      <div className="flex flex-col items-center self-stretch overflow-hidden rounded-sm h-100">
        <Image
          alt=""
          quality="100"
          placeholder="blur"
          width={800}
          height={298}
          layout="fixed"
          src={props.src}
        />
      </div>
      <div className="flex flex-row items-center mt-2">
        <a
          className={
            noArrow ? "no-underline hover:text-secondary" : "underline"
          }
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.title}
        </a>
        <span className="mx-2 opacity-40 text-tertiary">•</span>
        <p className="text-tertiary">{props.subtitle}</p>
        <div
          className={
            noArrow
              ? "hidden"
              : downloadArrow
              ? "hidden"
              : "flex flex-row items-center"
          }
        >
          <ArrowRight />
        </div>
        <div
          className={
            noArrow
              ? "hidden"
              : downloadArrow
              ? "flex flex-row items-center"
              : "hidden"
          }
        >
          <ArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Icon
