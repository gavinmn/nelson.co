import Link from "next/link"

const Project = props => (
  <div className="flex flex-col items-start">
    <Link href={props.link} passHref>
      <a>{props.title}</a>
    </Link>
    <p className="text-tertiary">{props.description}</p>
  </div>
)

export default Project

export const ExternalProject = props => (
  <div className="flex flex-col items-start">
    <a href={props.link}>{props.title}</a>
    <p className="text-tertiary">{props.description}</p>
  </div>
)

export const DoubleProject = props => (
  <div className="flex flex-col items-start">
    <div>
      <Link href={props.link1} passHref className="inline">
        <a className="inline">{props.title1}</a>
      </Link>
      <p className="inline"> & </p>
      <Link href={props.link2} passHref className="inline">
        <a className="inline">{props.title2}</a>
      </Link>
    </div>
    <p className="text-tertiary">{props.description}</p>
  </div>
)
