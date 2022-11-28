import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './pages/About';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom'
import Auth from './Auth/Auth';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/auth/:id' element={<Auth />} />
      </Routes>
    </div>
  )
}

export default App