import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/Window/MacWindow'

const App = () => {
  return (
    
      <main>
        <div>
          <Navbar/>
          <MacWindow/>
          <Dock/>
        </div>
      </main>
   
  )
}

export default App
