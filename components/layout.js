import PropTypes from "prop-types"
import { device } from "@/components/device"
import Link from "next/link"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
          }

          .content {
            flex-grow: 1;
          }

          .wrapper-large {
            max-width: 656px;
            padding: 0 5% 0 5%;
            margin: 0 auto;
          }

          .footer-container {
            margin-top: 4rem;
            padding-top: 2rem;
            background-color: var(--bg-secondary);
            flex-shrink: 0;
          }

          .layout-flex {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .top-flex {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;
          }

          .bottom-flex {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin-top: 36px;
          }

          .left-flex {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .right-flex {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }

          .col-one,
          .col-two {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }

          .link {
            background-image: none;
            text-shadow: none;
            font-size: var(--font-xs);
            color: var(--text-secondary);
            margin-bottom: 0.75rem;
          }

          .link:hover {
            color: var(--text-primary);
          }

          .link:hover > svg > path {
            fill: var(--text-primary);
          }
          @media ${device.desktop} {
            .footer-container {
              padding-top: 1rem;
              margin-top: 2rem;
            }

            .left-flex {
              flex-direction: row;
            }

            .col-one {
              margin-right: 64px;
            }
          }
        `}</style>

        <div className="content">
          <main>{children}</main>
        </div>

        <div className="footer-container">
          <div className="wrapper-large">
            <div className="layout-flex">
              <div className="top-flex">
                <div className="left-flex">
                  <div className="col-one">
                    <Link href="/" passhref>
                      <a className="link">About</a>
                    </Link>

                    <Link href="/#work" passhref>
                      <a className="link">Work</a>
                    </Link>
                  </div>
                  <div className="col-two">
                    <a
                      className="link"
                      href="mailto:gavin@nelson.co"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Email
                    </a>
                    <a
                      className="link"
                      href="https://twitter.com/Gavmn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                    <a
                      className="link"
                      href="https://www.are.na/gavin-nelson/index"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="21"
                        height="13"
                        viewBox="0 0 21 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.8036 9.00069L17.9781 6.78023C17.8052 6.6447 17.8052 6.42217 17.9781 6.28623L20.8036 4.06617C20.9769 3.93051 21.0492 3.70107 20.9645 3.55659C20.8796 3.4128 20.6427 3.36144 20.4386 3.44302L17.079 4.78108C16.8747 4.8628 16.6822 4.75099 16.6516 4.53293L16.1465 0.945948C16.1156 0.728293 15.9519 0.549805 15.7821 0.549805C15.6129 0.549805 15.4491 0.728293 15.4187 0.946219L14.9132 4.5332C14.8823 4.75126 14.6901 4.86307 14.4856 4.78135L11.1815 3.46525C10.9766 3.38366 10.6428 3.38366 10.4384 3.46525L7.13384 4.78135C6.92947 4.86307 6.73702 4.75126 6.70639 4.5332L6.20129 0.946219C6.17025 0.728293 6.0064 0.549805 5.83713 0.549805C5.66758 0.549805 5.50346 0.728293 5.47297 0.946219L4.96759 4.5332C4.93682 4.75126 4.74451 4.86307 4.54014 4.78135L1.18057 3.44329C0.976335 3.36157 0.739842 3.41307 0.655002 3.55687C0.570298 3.70134 0.642534 3.93078 0.815465 4.06644L3.64106 6.2865C3.81426 6.4223 3.81426 6.64483 3.64106 6.7805L0.81533 9.00069C0.642398 9.13649 0.570163 9.37962 0.654867 9.54076C0.739706 9.70177 0.9762 9.76669 1.18017 9.68483L4.50964 8.34772C4.71415 8.266 4.90457 8.37727 4.93317 8.59547L5.41388 12.2135C5.44288 12.4313 5.63316 12.6096 5.83686 12.6096C6.04001 12.6096 6.23042 12.4314 6.25956 12.2135L6.74068 8.59547C6.76928 8.37727 6.96037 8.266 7.16379 8.34772L10.4387 9.66206C10.6426 9.74419 10.9764 9.74419 11.1808 9.66206L14.4551 8.34772C14.6589 8.266 14.8495 8.37727 14.8786 8.59547L15.3598 12.2135C15.3885 12.4313 15.5789 12.6096 15.7819 12.6096C15.9855 12.6096 16.1759 12.4314 16.2049 12.2135L16.6857 8.59547C16.7152 8.37727 16.9053 8.266 17.1093 8.34772L20.4389 9.68483C20.6424 9.76669 20.8793 9.70177 20.9642 9.54076C21.0492 9.37962 20.9769 9.13649 20.8036 9.00069ZM13.6149 6.80855L11.1266 8.72408C10.9524 8.85825 10.6667 8.85825 10.4931 8.72408L8.00447 6.80855C7.83031 6.67411 7.82896 6.4532 8.00175 6.31713L10.4953 4.35295C10.668 4.21674 10.9511 4.21674 11.1239 4.35295L13.6176 6.31713C13.7906 6.4532 13.7893 6.67411 13.6149 6.80855Z"
                          fill="#7690B2"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="right-flex">
                  <Link href="/musicthread/heavy-rotation" passhref>
                    <a className="link">Heavy Rotation ♪</a>
                  </Link>
                  <Link href="/musicthread/2021-favorites" passhref>
                    <a className="link">2021 Favorites ♪</a>
                  </Link>
                </div>
              </div>
              <div className="bottom-flex">
                <Link href="/colophon" passhref>
                  <a className="link">Colophon</a>
                </Link>
                <footer>© {new Date().getFullYear()} Gavin Nelson</footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
