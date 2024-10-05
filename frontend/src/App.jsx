import { useState } from 'react'
import './App.css'
import Navbar from './components/Main/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">

      <header className="sticky top-0">
        <Navbar/>
      </header>

      <main>
        <Outlet/>
      </main>

      <footer>
        <Footer/>
        
      </footer>
    </div>
  )
}

export default App
