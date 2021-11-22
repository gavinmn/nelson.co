import { ArrowExternal } from "./svg"

const Tool = props => (
  <div className="flex flex-col items-start py-4">
    <a
      className="flex flex-row items-center"
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.name}
      <ArrowExternal />
    </a>
    <p className="text-tertiary dark:text-darkTertiary">{props.description}</p>
  </div>
)

export default Tool
