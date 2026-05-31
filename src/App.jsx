import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Quote from './components/Quote'
import Footer from './components/Footer'

function App() {

  return (
    <Router>

      <div className='min-h-screen bg-white dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 transition-colors duration-300'>
        <div className='max-w-[700px] mx-auto w-[92%]'>

          <Navbar />

          <main className='px-2 pb-20'>
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          <div className="px-2">
            <Quote />
            <Footer />
          </div>
          
        </div>
      </div>

    </Router>
  )
}

export default App
