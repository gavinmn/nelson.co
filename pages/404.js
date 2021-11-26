import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Link from "next/link"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found " />
    <div className="flex flex-col items-start justify-center h-screen -mt-32">
      <h1>404</h1>
      <p>
        This is not the page you are looking for. <br></br>Why don't you go{" "}
        <Link href="/" className="here-link">
          <a>here.</a>
        </Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
