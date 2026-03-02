import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Checkout from './pages/checkout'
import Auth from './pages/Auth'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthContext'
import ProductDeatail from './pages/ProductDetails'

function App() {
//  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/products/:id' element={<ProductDeatail/>}/>
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
