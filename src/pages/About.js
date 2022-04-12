import { Layout } from "../components/layout"
import bg from '../static/muhammad-amer-TXJEdxs5Hh4-unsplash.webp'

export const About = () => {
  return (
    <Layout>
      <section style={{backgroundImage: `url(${bg})`}} className="bg-cover h-[40vh] bg-fixed">
        <div className="h-full bg-[#000000aa] flex flex-col text-white text-5xl justify-center items-center">
          <h1 className="font-display">ABOUT US</h1>
          <p className="mt-10 font-serif"><em>Our mission is to enable businesses to scale and reach wider audiences</em></p>
        </div>
      </section>
    </Layout>
  )
}