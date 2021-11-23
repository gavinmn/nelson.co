import MusicEntry from "./musicentry"

const MusicThread = props => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const formattedData = props.links.reduce((carry, item) => {
    const timestamp = new Date(item.submitted_at)

    const monthYearStamp = `${
      monthNames[timestamp.getMonth()]
    }, ${timestamp.getFullYear()}`

    if (monthYearStamp in carry) {
      carry[monthYearStamp].push(item)
    } else {
      carry[monthYearStamp] = [item]
    }

    return carry
  }, {})
  const dateKeys = Object.keys(formattedData)

  return (
    <>
      <h1>{props.title}</h1>
      <p>
        {props.subtitle}, powered by{" "}
        <a href="https://musicthread.app/">MusicThread</a>
      </p>
      <div className="mt-8">
        {dateKeys.map((entry, key) => {
          return (
            <div className="" key={key}>
              <h2>{entry}</h2>
              <div className="flex flex-row items-end mt-4 mb-8">
                <div className="self-stretch w-0.5  bg-code dark:bg-darkCode md:-mt-3" />
                <div className="grid gap-8 ml-4 ">
                  {formattedData[entry].map((data, key) => {
                    return (
                      <MusicEntry
                        key={data.key}
                        link={data.page_url}
                        src={data.thumbnail_url}
                        title={data.title}
                        artist={data.artist}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MusicThread
