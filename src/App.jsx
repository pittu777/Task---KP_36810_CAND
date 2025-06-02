import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/layout/Navbar'
import AboutHero from './components/sections/AboutSection/AboutHero'
import StatItem from './components/sections/AboutSection/StatItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <AboutHero/>
      <StatItem/>
       
    </>
  )
}

export default App
