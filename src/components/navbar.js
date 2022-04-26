import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="bg-black p-5 text-center text-gray-300">
      <Link to='/' className="mr-5 hover:text-gray-400">Home</Link>
      <Link to='/blog' className="mr-5 hover:text-gray-400">Blog</Link>
      <Link to='/contact' className="mr-5 hover:text-gray-400">Contact</Link>
      <Link to='/about' className="mr-5 hover:text-gray-400">About</Link>
      {/* <span className="mr-5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span> */}
    </nav>
  )
}