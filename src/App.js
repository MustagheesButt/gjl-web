import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Blog } from './pages/Blog'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import './App.css'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/about' element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
