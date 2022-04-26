import { Layout } from "../components/layout"
import bg from '../static/muhammad-amer-TXJEdxs5Hh4-unsplash.webp'

export const Contact = () => {
  return (
    <Layout>
      <section className='bg-cover bg-fixed' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg})` }}>
        <div className='flex flex-col text-white text-5xl justify-center items-center w-2/3 m-auto h-screen'>
          <h1 className='font-display'>Contact Us</h1>

          <h2 className='text-4xl font-bold font-serif italic text-center my-10'>there for you, 24/7</h2>
          <h3 className='text-3xl text-center mb-5'>info@goodjoblahore.com</h3>
          <h3 className='text-3xl text-center'>support@goodjoblahore.com</h3>
        </div>
      </section>

      <section className='py-10'>

      </section>
    </Layout>
  )
}