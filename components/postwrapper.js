import React from "react"
import { device } from "./device"

import SEO from "@/components/seo"
import Layout from "@/components/layout"
import Fade from "@/components/fade"
import Wrapper from "@/components/wrapper"

const PostWrapper = props => {
  return (
    <Layout>
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
          margin: 8rem 0 0rem 0;
        }
        .feedback {
          margin-top: 4rem;
          padding: 0.5rem 1rem;
          background-color: var(--bg-secondary);
          border-radius: 8px;
        }

        .feedback-title {
          margin-top: 0;
        }

        .email,
        .twitter {
          color: var(--text-secondary);
          background-image: none;
          text-shadow: none;
        }

        .email:hover {
          color: var(--text-primary);
        }

        .twitter:hover {
          color: #1da1f2;
        }

        @media ${device.desktop} {
          .container {
            margin: 4rem 0 0rem 0;
          }
        }
      `}</style>
      <SEO title={props.title} og={props.og} description={props.description} />
      <div className="wrapper-large">
        <Fade>
          <div className="container">
            <div className="wrapper-small">
              {props.children}
              <div className="feedback">
                <h3 className="feedback-title">Feedback</h3>
                <p>
                  Do you have comments or questions about something I wrote?
                  Send them my way on{" "}
                  <a
                    className="twitter"
                    href="https://twitter.com/Gavmn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>{" "}
                  or over{" "}
                  <a
                    className="email"
                    href="mailto:gavin@nelson.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    email
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Layout>
  )
}

export default PostWrapper
