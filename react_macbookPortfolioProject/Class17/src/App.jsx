import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'

const App = () => {
  return (
    
      <main>
        <div>
          <Navbar/>
          <Dock/>
        </div>
      </main>
   
  )
}

export default App
