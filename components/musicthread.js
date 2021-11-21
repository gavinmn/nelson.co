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
    <div className="wrapper-large">
      <h1>{props.title}</h1>

      <p>
        {props.subtitle}, powered by{" "}
        <a className="thread-link" href="https://musicthread.app/">
          MusicThread
        </a>
      </p>
      <div className="mt-2">
        {dateKeys.map((entry, key) => {
          return (
            <div key={key}>
              <p>{entry}</p>
              <div className="flex flex-row items-end mt-8 mb-16 md:mt-4 md:mb-2">
                <div className="self-stretch -mt-6 md:-mt-3" />
                <div className="grid gap-8 mx-auto my-0">
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
    </div>
  )
}

export default MusicThread
