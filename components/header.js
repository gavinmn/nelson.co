import { useRouter } from "next/router"
import Link from "next/link"
import { device } from "./device"

const Header = () => {
  let highlightWork = false
  let highlightAbout = true

  const router = useRouter()

  if (router.pathname !== "/") {
    highlightAbout = false
    highlightWork = true
  } else {
    highlightAbout = true
    highlightWork = false
  }
  console.log(highlightAbout)

  return (
    <div className="header">
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 0.55rem 0;
          background-color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          z-index: 10;
        }
        @media (prefers-color-scheme: dark) {
          .header {
            background-color: hsla(224, 33%, 16%, 0.9);
          }
        }
        .container {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }

        .wrapper {
          max-width: 656px;
          padding: 0 5% 0 5%;
          margin: 0 auto;
        }

        .about-link,
        .work-link {
          background-image: none;
          text-shadow: none;
          margin-left: 1.5rem;
          color: var(--text-primary);
        }

        .about-link-highlight,
        .work-link-highlight {
          background-image: none;
          text-shadow: none;
          margin-left: 1.5rem;
          color: var(--text-accent);
        }

        .about-link:hover,
        .work-link:hover {
          cursor: pointer;

          text-decoration: none;
        }

        .about-link-highlight:hover,
        .work-link-highlight:hover {
          cursor: pointer;
          color: var(--text-primary);
          text-decoration: none;
        }

        .name {
          background-image: none;
          margin-right: auto;
          margin-left: 0;
          color: var(--text-primary);
        }

        .name:hover {
          cursor: pointer;
          color: var(--text-primary);
          text-decoration: none;
        }

        @media ${device.desktop} {
          .header {
            padding: 0.35rem 0;
          }
        }
      `}</style>

      <div className="wrapper">
        <div className="container">
          <Link href="/" passhref>
            <a className="name">Gavin Nelson</a>
          </Link>
          <Link href="/" passhref>
            <a
              className={highlightAbout ? "about-link-highlight" : "about-link"}
            >
              About
            </a>
          </Link>
          <Link href="/#work" passhref>
            <a className={highlightWork ? "work-link-highlight" : "work-link"}>
              Work
            </a>
          </Link>
          <Link href="/notes" passhref>
            <a className={"work-link"}>Notes</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
