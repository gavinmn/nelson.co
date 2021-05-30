const ReadwiseMetadata = ({ book, children }) => {
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

  const title = book.title
  const author = book.author
  const bookID = book.id
  const sourceLink = book.source_url
  const highlightTime = book.last_highlight_at
  const highlightsNum = book.num_highlights

  const date = new Date(highlightTime)

  const dateStamp = `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`

  return (
    <div className="item-container">
      <div className="chevron-line-container">
        <svg
          className="chevron"
          onClick={() => {
            console.log("test")
          }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1315 4H3.86852C3.06982 4 2.59343 4.89015 3.03647 5.5547L7.16795 11.7519C7.56377 12.3457 8.43623 12.3457 8.83205 11.7519L12.9635 5.5547C13.4066 4.89015 12.9302 4 12.1315 4Z"
            fill="var(--text-primary)"
          />
        </svg>
        <div className="line" />
      </div>

      <div className="content-container">
        <div className="metadata">
          <a className="title" href={sourceLink}>
            {title}
          </a>
          <p className="author">{author}</p>
          <p className="date">{`Read ${dateStamp}`}</p>
          <p className="highlights-num">{`${highlightsNum} highlights`}</p>
        </div>
        {children}
      </div>
      <style jsx>{`
        .item-container {
          display: flex;
          flex-direction: row;
          margin-bottom: 1rem;
        }

        .chevron-line-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
          flex-shrink: 0;
          margin-right: 1rem;
          padding-top: 0.25rem;
        }

        .chevron {
          margin-bottom: 0.5rem;
          flex-shrink: 0;
        }

        .chevron:hover {
          cursor: pointer;
        }

        .chevron.rotated {
          transform: rotate(90deg);
        }

        @media only screen and (min-width: 768px) {
          .chevron {
            margin-bottom: 0.25rem;
          }
          .chevron-line-container {
            margin-right: 0.5rem;
          }
        }

        .metadata {
          display: flex;
          flex-direction: column;
          margin-bottom: 0.5rem;
        }

        .line {
          background-color: var(--primary-200);
          width: 2px;
          height: 100%;
        }

        .title {
          font-size: var(--h3);
          font-weight: bold;
        }

        .author {
        }

        .date {
          display: none;
          font-size: var(--small);
          color: var(--accent-100);
        }

        .highlights-num {
          font-size: var(--small);
          color: var(--accent-100);
        }
      `}</style>
    </div>
  )
}

export default ReadwiseMetadata
