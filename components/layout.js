import Link from "next/link"

const Layout = ({ children }) => {
  return (
    <main>
      <div className="mx-auto max-w-container-small md:max-w-container-large">
        {children}
        <div className="flex flex-row justify-between mb-8 ">
          <p className="text-sm text-tertiary">
            © {new Date().getFullYear()} Gavin Nelson
          </p>
          <div className="flex flex-row">
            <a
              href="https://nelson.co/feed.xml"
              className="mr-4 text-sm text-tertiary"
            >
              RSS
            </a>
            <Link href="/colophon" passhref>
              <a className="text-sm text-tertiary">Colophon</a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Layout
