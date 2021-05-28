const ButtonExternal = props => (
  <a
    className="button"
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      className="arrow"
      width="15"
      height="13"
      viewBox="0 0 15 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9805 6.20117C14.9805 5.87891 14.8438 5.54688 14.6191 5.32227L9.6582 0.380859C9.4043 0.126953 9.11133 0 8.82812 0C8.125 0 7.64648 0.488281 7.64648 1.13281C7.64648 1.49414 7.80273 1.76758 8.02734 1.99219L9.58008 3.55469L11.2793 5.10742L9.60938 5.00977H1.25977C0.517578 5.00977 0.0195312 5.48828 0.0195312 6.20117C0.0195312 6.91406 0.517578 7.40234 1.25977 7.40234H9.60938L11.2793 7.30469L9.58008 8.85742L8.02734 10.4199C7.80273 10.6348 7.64648 10.918 7.64648 11.2695C7.64648 11.9141 8.125 12.4023 8.82812 12.4023C9.11133 12.4023 9.4043 12.2754 9.6582 12.0312L14.6191 7.08984C14.8438 6.86523 14.9805 6.5332 14.9805 6.20117Z"
        fill="var(--text-accent)"
      />
    </svg>

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

      .arrow {
        font-size: 20px;
        font-weight: bold;
        color: var(--text-accent);
      }
    `}</style>
  </a>
)
export default ButtonExternal
