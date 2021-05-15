import { device } from "./device"
import Caption from "./caption"
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
      <style jsx>{`
        .wrapper-large {
          max-width: 816px;
          padding: 0 5% 0 5%;
          margin: 0 auto;
        }

        .wrapper-small {
          max-width: 624px;
          padding: 0;
          margin: 0 auto;
        }

        .container {
          margin: 8rem auto;
          max-width: 338px;
        }

        .thread-link {
          font-size: var(--small);
          color: var(--text-secondary);
        }

        .thread-link:hover {
          color: var(--text-primary);
        }

        .timeline {
          margin-top: 2rem;
        }

        .month-container {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          margin-bottom: 4rem;
          margin-top: 2rem;
        }

        .line {
          background-color: var(--bg-secondary);
          width: 4px;
          align-self: stretch;
          margin-top: -1.5rem;
        }

        .music-container {
          display: grid;
          grid-gap: 2rem;
          margin: 0 auto;
        }

        .month {
          font-style: italic;
        }

        .number {
          color: var(--text-secondary);
          font-size: var(--small);
        }

        @media ${device.desktop} {
          .container {
            margin: 4rem 0 0 0;
            max-width: 624px;
          }

          .month-container {
            margin-top: 1rem;
            margin-bottom: 2rem;
          }

          .line {
            margin-top: -0.75rem;
          }

          .music-container {
            margin: 0 0 0 1rem;
            grid-gap: 1rem;
          }
        }
      `}</style>
      <div className="wrapper-small">
        <div className="container">
          <h1>{props.title}</h1>

          <Caption>
            {props.subtitle}, powered by{" "}
            <a className="thread-link" href="https://musicthread.app/">
              MusicThread
            </a>
          </Caption>
          <div className="timeline" s>
            {dateKeys.map((entry, key) => {
              return (
                <>
                  <p className="month">{entry}</p>
                  <div className="month-container">
                    <div className="line" />
                    <div className="music-container">
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
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MusicThread
