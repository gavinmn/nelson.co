import CustomLink from "@/components/customlink"

const Project = props => (
  <div className="flex flex-col items-start">
    <CustomLink href={props.link} passHref>
      <a>{props.title}</a>
    </CustomLink>
    <p className="text-tertiary">{props.description}</p>
  </div>
)

export default Project
