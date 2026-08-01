import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './comonents/Navbar'
import Section from './comonents/Section'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import axios from 'axios';
import About from './pages/About';

const App = () => {
  return (
    <div className='w-full h-fit p-10 bg-[#ADA9A9]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:id' element={<ProductDetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
