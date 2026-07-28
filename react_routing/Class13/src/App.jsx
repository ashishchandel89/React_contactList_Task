import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Process from './pages/Process'
import Testimonial from './pages/Testimonial'
import Faqs from './pages/Faqs'
import NotFound from './pages/NotFound'
import Backend from './components/Backend'
import RandomAbout from './pages/RandomAbout'

const App = () => {
  return (
    <div className="w-full bg-[radial-gradient(circle,#27464D_10%,#040608_100%)] px-15 py-7">
      <Navbar/>

      <Routes>
        
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/backend' element={<Backend/>}/>
        <Route path='/process' element={<Process/>}/>
        <Route path='/testimonials' element={<Testimonial/>}/>
        <Route path='/faqs' element={<Faqs/>}/>
        <Route path='/*' element={<NotFound/>}/>

      /*----------------Dynamic Route------------------*/

    <Route path='/about/:key' element={<RandomAbout/>}/>
      </Routes>
    </div>
  )
}

export default App
