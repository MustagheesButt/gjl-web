import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/about' element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
