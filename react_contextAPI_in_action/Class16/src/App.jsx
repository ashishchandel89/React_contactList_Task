import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './comonents/Navbar'
import Section from './comonents/Section'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Contact from './pages/Contact'
import axios from 'axios';

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/productdetail' element={<ProductDetail/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
