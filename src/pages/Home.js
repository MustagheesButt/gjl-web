import { Layout } from '../components/layout'
import './Home.css'
import bg from '../static/muhammad-amer-TXJEdxs5Hh4-unsplash.webp'

export const Home = () => {
  return (
    <Layout>
      <section style={{backgroundImage: `url(${bg})`}} className="bg-cover h-[80vh]">
        <div className="h-full bg-[#000000aa] flex flex-col text-white text-6xl justify-center items-center">
          <h1 className="font-display">Good Job Lahore</h1>
          <p className="mt-10 font-serif"><em>Success is a choice</em></p>
        </div>
      </section>

      <section>
        portfolio
      </section>
    </Layout>
  )
}