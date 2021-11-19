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
          <Link href="/colophon" passhref>
            <a className="text-sm text-tertiary">Colophon</a>
          </Link>
        </div>
      </div>
    </main>
  )
}
export default Layout
