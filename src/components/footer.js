import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer>
      <section className="flex flex-col md:flex-row m-auto py-5 w-3/5 border-b-2 justify-between">
        <div className="flex flex-col basis-1/4 mt-5">
          <h5 className="font-bold">Services</h5>
          <Link className="mt-2 text-gray-600 hover:text-gray-800" to='/services/ecommerce'>Ecommerce</Link>
          <Link className="mt-2 text-gray-600 hover:text-gray-800" to='/services/portfolio-sites'>Portfolio/Static Sites</Link>
          <Link className="mt-2 text-gray-600 hover:text-gray-800" to='/services/mobile'>Mobile App Development</Link>
          <Link className="mt-2 text-gray-600 hover:text-gray-800" to='/services/crm'>CRM</Link>
        </div>
        <div className="flex flex-col basis-1/4 mt-5">
          <h5 className="font-bold">Customer Support</h5>
          <Link className="mt-2 text-gray-600 hover:text-gray-800" to='/faq'>FAQ</Link>
          <Link className="mt-2 text-gray-600 hover:text-gray-800" to='/contact'>Contact Us</Link>
          <a className="mt-2 text-gray-600 hover:text-gray-800" href='mailto:support@goodjoblahore.com'>support@goodjoblahore.com</a>
        </div>
        <div className="flex flex-col basis-1/4 mt-5">
          <h5 className="font-bold">More Information</h5>
          <Link className="mt-2 text-gray-600 hover:text-gray-800" to='/about'>About Us</Link>
          <Link className="mt-2 text-gray-600 hover:text-gray-800" to='/blog'>Blog</Link>
          <Link className="mt-2 text-gray-600 hover:text-gray-800" to='/privacy-policy'>Privacy Policy</Link>
          <Link className="mt-2 text-gray-600 hover:text-gray-800" to='/tos'>Terms of Service</Link>
        </div>
      </section>
      <section className="m-auto my-3 w-2/5">
        <p>Copyright &copy; {(new Date()).getFullYear()} Good Job Lahore Inc. All rights reserved.</p>
      </section>
    </footer>
  )
}