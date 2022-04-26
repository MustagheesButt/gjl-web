import { Layout } from "../components/layout"
import bg from '../static/muhammad-amer-TXJEdxs5Hh4-unsplash.webp'

export const About = () => {
  return (
    <Layout>
      <section style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${bg})`}} className="bg-cover h-screen bg-fixed">
        <div className="h-full flex flex-col text-white text-5xl justify-center items-center w-2/3 m-auto">
          <h1 className="font-display">ABOUT US</h1>
          <p className="mt-10 font-serif text-center"><em>Our mission is to enable businesses to scale and reach wider audiences</em></p>
        </div>
      </section>
    </Layout>
  )
}