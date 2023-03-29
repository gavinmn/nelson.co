import Image from "next/legacy/image"
import { ArrowDown } from "@/components/svg.js"

const Icon = props => {
  let downloadArrow = false
  let noLink = false

  if (props.download === true) {
    downloadArrow = true
  }

  if (props.link === undefined) {
    noLink = true
  }

  return (
    <div className="flex flex-col items-stretch max-w-full overflow-hidden">
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
      <div className="flex flex-row items-center justify-between mt-2">
        <div className="flex flex-row items-center">
          <a
            className={
              noLink
                ? "no-underline hover:text-secondary dark:text-darkSecondary"
                : "underline dark:underline-dark"
            }
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.title}
          </a>
          <span className="mx-2 opacity-40 text-tertiary dark:text-darkTertiary">
            ·
          </span>
          <p className="text-tertiary dark:text-darkTertiary">
            {props.subtitle}
          </p>
        </div>
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className={downloadArrow ? "flex flex-row items-center" : "hidden"}
        >
          <ArrowDown />
        </a>
      </div>
    </div>
  )
}

export default Icon
