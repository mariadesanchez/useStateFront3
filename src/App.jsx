import { useState } from 'react'
import './App.css'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {

  const [cart, setCart] = useState([])

  return (
    <>

      <Home cart={cart} setCart={setCart}/>
   
    </>
  )
}

export default App
