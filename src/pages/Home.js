import { Layout } from '../components/layout'
import './Home.css'
import bg from '../static/muhammad-amer-TXJEdxs5Hh4-unsplash.webp'
import { useEffect, useState } from 'react'

export const Home = () => {
  return (
    <Layout>
      <section style={{ backgroundImage: `url(${bg})` }} className="h-[80vh] bg-[length:100%] duration-700">
        <div className="h-full bg-[#00000077] flex flex-col text-white text-6xl justify-center items-center">
          <h1 className="font-display">Good Job Lahore</h1>
          <p className="mt-10 font-serif"><em>Success is a choice</em></p>
        </div>
      </section>

      <section className='py-20 bg-gray-100'>
        <h2 className='text-4xl font-bold text-center mb-10 underline underline-offset-8 decoration-rose-500' data-aos='fade-up'>Services</h2>

        <div className='flex flex-col md:flex-row items-center justify-center' data-aos='fade-up'>
          <div className='rounded bg-white p-6 mb-5 md:mr-5 max-w-sm'>
            <h3 className='text-2xl text-gray-600 font-bold mb-3'>E-commerce Stores</h3>
            <p className='mb-5'>Want to take your business online and reach thousands of new customers? Help your business grow by making your business accessible to your local and global audiences.</p>
            <Estimator base={25000} data={{
              "Data Entry (500 products)": { price: 5000, checked: true },
              "Business Emails": { price: 0, checked: true },
              "Managed Domain & Hosting (yearly)":  {price: 15000, checked: false},
              "POS Integration": { price: 10000, checked: false },
              "One Year Support": { price: 0, checked: true }
            }} />
          </div>

          <div className='rounded bg-white p-6 mb-5 md:mr-5 max-w-sm' data-aos='fade-up'>
            <h3 className='text-2xl text-gray-600 font-bold mb-3'>Mobile Apps</h3>
            <p className='mb-5'>Make it easier for your customers to access all you have to offer in one elegant mobile app. Integrate your mobile app with your existing infrastructure and web applications.</p>
            <br />
            <Estimator base={0} data={{
              Android: { price: 50000, checked: true},
              iOS: { price: 60000, checked: false },
              "3rd Party Integrations": { price: 20000, checked: false },
              "One Year Support": { price: 0, checked: true }
            }} />
          </div>

          <div className='rounded bg-white p-6 mb-5 md:mr-5 max-w-sm' data-aos='fade-up'>
            <h3 className='text-2xl text-gray-600 font-bold mb-3'>Portfolio Sites</h3>
            <p className='mb-5'>Showcase your brand or company and the great work you are doing to change the world. Win your customer's trust and increase your profits ten folds.</p>
            <br />
            <Estimator base={20000} data={{
              "Business Emails": { price: 0, checked: true },
              "Managed Domain & Hosting (yearly)":  {price: 15000, checked: false},
              "HD Videos":  {price: 10000, checked: false},
              "One Year Support": { price: 0, checked: true }
            }} />
          </div>
        </div>
      </section>

      <section className='text-center p-16'>
        <h2 className='text-4xl font-bold font-serif italic mb-5'>for inquiries</h2>
        <a href="mailto:info@goodjoblahore.com" className='text-3xl font-bold underline underline-offset-8 decoration-rose-500'>info@goodjoblahore.com</a>
      </section>
    </Layout>
  )
}

const Estimator = ({ base, data }) => {
  const [estimate, setEstimate] = useState(base)
  const [options, setOptions] = useState(data)

  useEffect(() => {
    setEstimate(base + Object.keys(options).reduce((x, y) => { return x + options[y].checked * options[y].price}, 0))
  }, [options, base])

  function check(key) {
    setOptions({
      ...options,
      [key]: {
        ...options[key],
        checked: !options[key].checked
      }
    })
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PKR',
  })

  return (
    <>
      <div className='mb-5'>
        {
          Object.keys(data).map(d => (
            <div key={d}>
              <input type='checkbox' checked={options[d].checked} onChange={() => check(d)} /> {d}
            </div>
          ))
        }
      </div>
      <h4 className='text-xl'>Starting from <br /><span className='font-bold'>{formatter.format(estimate)}</span></h4>
    </>
  )
}