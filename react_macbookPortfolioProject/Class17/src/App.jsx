import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/Window/MacWindow'
import Github from './components/Window/Github'
import Notes from './components/Window/Notes'

const App = () => {
  return (
    
      <main>
        <div>
          <Navbar/>
          <Github/>
          <Dock/>
          <Notes/>
        </div>
      </main>
   
  )
}

export default App
