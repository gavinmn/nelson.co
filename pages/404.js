import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Link from "next/link"
import { device } from "@/components/device"

const NotFoundPage = props => (
  <Layout>
    <style jsx>{`
      .wrapper-large {
        max-width: 816px;
        padding: 0 5% 0 5%;
        margin: 0 auto;
      }

      .text-container {
        margin-top: -1rem;
        display: flex;
        flex-direction: column;
        height: 100vh;
        align-items: start;
        justify-content: center;
      }

      .here-link {
        color: var(--text-secondary);
        font-size: var(--body);
      }
      .here-link:hover {
        text-decoration: underline;
      }

      @media ${device.desktop} {
        .text-container {
          margin-top: 1rem;
        }
      }
    `}</style>
    <SEO title="404: Not found " />
    <div className="wrapper-large">
      <div className="text-container">
        <h1>404</h1>
        <p>
          This is not the page you are looking for. <br></br>Why don't you go{" "}
          <Link href="/" className="here-link">
            <a>here.</a>
          </Link>
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
