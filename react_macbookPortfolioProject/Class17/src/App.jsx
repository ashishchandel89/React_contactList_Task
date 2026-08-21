import React from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/Window/MacWindow'
import Github from './components/Window/Github'
import Notes from './components/Window/Notes'
import Resume from './components/Window/resume'
import Spotify from './components/Window/Spotify'
import Cli from './components/Window/Cli'

const App = () => {
  return (
    
      <main>
        <div>
          <Navbar/>
          <Github/>
          <Dock/>
          <Notes/>
          <Resume/>
          <Spotify/>
          <Cli/>
        </div>
      </main>
   
  )
}

export default App
