import Logo from "./logo"
import Break from "@/components/break"
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
          justify-self: start;
          margin-top: -0.5rem;
        }

        .hero-text {
          max-width: 412px;
          margin-top: 2rem;
        }

        .hero-text > p {
          font-size: var(--body);
        }

        .link-container {
          display: flex;
          flex-direction: row;
          max-width: 100%;
          justify-content: space-between;
          margin-top: 1rem;
        }

        .email,
        .dribbble,
        .twitter,
        .github {
          background-image: none;
          text-shadow: none;
          color: var(--text-accent);
          font-size: var(--small);
          transition: all 200ms ease-in-out;
        }

        .dribbble:hover {
          color: #ea4c89;
          background-color: rgba(234, 76, 137, 0.1);
        }
        .twitter:hover {
          color: #1da1f2;
          background-color: rgba(29, 161, 242, 0.1);
        }
        .github:hover {
          color: var(--github-text);
          background-color: rgba(36, 41, 46, 0.1);
        }

        @media (prefers-color-scheme: dark) {
          .github:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        }

        @media only screen and (min-width: 445px) {
          .link-container {
            justify-content: start;
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
          }

          .hero-text {
            margin-top: 1rem;
            max-width: 496px;
            justify-self: end;
          }
          .styled-logo-container {
            justify-self: start;
          }

          .link-container {
            margin-top: 0.5rem;
          }
        }
      `}</style>
      <div className="styled-logo-container">
        <Logo />
      </div>
      <div className="hero-text">
        <p>
          Gavin Nelson is a <strong>product & visual designer </strong>
          who creates intuitive and clean human-centered design solutions with
          great attention to detail.
        </p>
        <Break />
        <p>
          He currently works at GitHub, and previously worked at Fitbod and
          wikiHow.
        </p>
      </div>
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
