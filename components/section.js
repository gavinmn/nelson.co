const Section = ({ title, children }) => {
  return (
    <div className="flex flex-col items-start">
      <h1 className="mb-4 text-base">{title}</h1>
      {children}
    </div>
  )
}

export default Section
