import { useState } from 'react'
import { Features,Footer,Home,NewFlavors,TimeLine } from './pages'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     <TimeLine/>
     <NewFlavors/>
     <Features/>
     <Footer/>
    </>
  )
}

export default App
