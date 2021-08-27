const ButtonDownload = props => (
  <a
    className="button"
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
    alt=""
    download
  >
    <p>Download</p>

    <style jsx>{`
      .button {
        background-image: none;
        text-shadow: none;
        display: flex;
        flex-grow: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 16px;

        border-radius: 6px;
        background-color: var(--button-fill);
        border: 1px solid var(--button-border);
        box-shadow: var(--button-shadow);

        transition: 300ms ease-in-out;
      }

      .button:hover {
        cursor: pointer;
        text-decoration: none;
        background-color: var(--button-hover);
      }

      .button > svg > path {
        transition: 300ms ease-in-out;
      }
    `}</style>
  </a>
)
export default ButtonDownload
