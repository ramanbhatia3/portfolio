import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='min-h-screen bg-white dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 transition-colors duration-300'>

      <div className='max-w-[700px] mx-auto w-[92%]'>
        <Navbar />
        <main className='px-2'>
          <Hero />
        </main>
      </div>
    </div>
  )
}

export default App
