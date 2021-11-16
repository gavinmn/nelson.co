import PropTypes from "prop-types"
import { device } from "@/components/device"
import Link from "next/link"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <main>
      <div className="mx-auto max-w-container-small md:max-w-container-large">
        {children}
        <div className="mb-8">
          <p>{new Date().getFullYear()} Gavin Nelson</p>
        </div>
      </div>
    </main>
  )
}
export default Layout
