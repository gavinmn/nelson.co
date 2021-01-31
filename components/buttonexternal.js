const ButtonExternal = props => (
  <a
    className="button"
    href={props.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <style jsx>{`
      .button {
        background-image: none;
        text-shadow: none;
        display: flex;
        flex-grow: 0;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8px 20px;
        background-color: var(--bg-primary-hex);
        border-radius: 4px;
      }

      .button:hover {
        cursor: pointer;
        text-decoration: none;
        background-color: var(--text-secondary);
      }
      .button:hover > p {
        color: var(--bg-primary-hex);
      }

      .arrow {
        font-size: 20px;
        font-weight: bold;
        color: var(--text-secondary);
      }
    `}</style>
    <p className="arrow">→</p>
  </a>
)
export default ButtonExternal
