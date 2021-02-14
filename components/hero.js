import Logo from "./logo"

import { device } from "./device"

const Hero = props => {
  return (
    <div className="hero-container">
      <style jsx>{`
        .hero-container {
          display: grid;
          grid-template-columns: auto;
          grid-template-rows: [1] auto [2] auto [3] auto [end];
          align-items: start;
        }

        .styled-logo-container {
          justify-self: center;
        }

        .hero-text {
          max-width: 480px;
        }

        .link-container {
          display: flex;
          flex-direction: row;
          max-width: 100%;
          justify-content: space-between;
          margin-top: 0.5rem;
        }

        .email,
        .dribbble,
        .twitter,
        .github {
          background-image: none;
          text-shadow: none;
          color: var(--text-secondary);
          font-size: var(--font-xs);
        }
        .email:hover {
          color: var(--text-primary);
        }
        .dribbble:hover {
          color: #ea4c89;
        }
        .twitter:hover {
          color: #1da1f2;
        }
        .github:hover {
          color: var(--github-text);
        }

        @media only screen and (min-width: 445px) {
          .link-container {
            justify-content: start;
          }
          .styled-logo-container {
            justify-self: start;
          }

          .dribbble,
          .twitter,
          .github {
            margin-left: 1.5rem;
          }
        }

        @media ${device.desktop} {
          .hero-container {
            grid-template-columns: auto;
            grid-template-rows: [1] auto [2] auto [end];
            max-width: 816px;
          }

          .styled-logo-container {
          }

          .hero-text {
            margin-top: 0;
            justify-self: end;
            max-width: 522px;
          }

          .link-container {
          }
        }
      `}</style>
      <div className="styled-logo-container">
        <Logo />
      </div>
      <p className="hero-text">
        Gavin Nelson is a <strong>product & visual designer </strong>
        in the San Francisco Bay Area. He creates intuitive and clean
        human-centered design solutions with great attention to detail.
        <br></br>
        <br></br>He currently works at Fitbod, and previously worked at wikiHow.
      </p>
      <div className="link-container">
        <a
          className="email"
          href="mailto:gavin@nelson.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          className="twitter"
          href="https://twitter.com/Gavmn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          className="dribbble"
          href="https://dribbble.com/Gavin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dribbble
        </a>
        <a
          className="github"
          href="https://github.com/gavinmn"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default Hero
