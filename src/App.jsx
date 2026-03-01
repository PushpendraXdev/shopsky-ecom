import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Checkout from './pages/checkout'
import Auth from './pages/auth'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  )
}

export default App
