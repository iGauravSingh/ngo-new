import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Grid from './components/grid/Grid'
import News from './components/news/News'
import TeamList from './components/team/TeamList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Grid />
    <News />
    <TeamList />
    </>
  )
}

export default App
