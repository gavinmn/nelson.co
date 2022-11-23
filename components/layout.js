import Link from "next/link"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <main>
      <div className="mx-auto mt-16 max-w-container-small md:max-w-container-large md:mt-32">
        <Header />
        {children}
        <div className="flex flex-row justify-between my-8">
          <p className="text-sm text-tertiary dark:text-darkTertiary">
            © {new Date().getFullYear()} Gavin Nelson
          </p>
          <div className="flex flex-row">
            <a
              href="https://nelson.co/feed.xml"
              className="mr-4 text-sm text-tertiary dark:text-darkTertiary"
            >
              RSS
            </a>
            <Link
              href="/colophon"
              passhref
              className="text-sm text-tertiary dark:text-darkTertiary"
            >
              Colophon
            </Link>
            <div className="hidden">
              <a rel="me" href="https://mastodon.design/@gn">
                Mastodon
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Layout
