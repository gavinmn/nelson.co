import PropTypes from "prop-types"
import { device } from "@/components/device"
import Link from "next/link"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <main>
      <div className="mx-auto max-w-container">{children}</div>
    </main>
  )
}
export default Layout
