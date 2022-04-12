import { Footer } from "./footer"
import { Navbar } from "./navbar"

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}