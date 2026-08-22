import React, { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Navbar from './components/Navbar'
import MacWindow from './components/Window/MacWindow'
import Github from './components/Window/Github'
import Notes from './components/Window/Notes'
import Resume from './components/Window/resume'
import Spotify from './components/Window/Spotify'
import Cli from './components/Window/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const App = () => {
  const [windowState,setWindowState]=useState({
    github:false,
    notes:false,
    resume:false,
    spotify:false,
    cli:false
  })
  return (
      <main>
        <div>
          <Navbar/>
          <Dock windowState={windowState} setWindowState={setWindowState}/>
          {windowState.github && <Github windowName='github' setWindowState={setWindowState}/>}
          {windowState.notes && <Notes windowName='notes' setWindowState={setWindowState}/>}
          {windowState.resume && <Resume windowName='resume' setWindowState={setWindowState}/>}
          {windowState.spotify && <Spotify windowName='spotify' setWindowState={setWindowState}/>}
          {windowState.cli && <Cli windowName='cli' setWindowState={setWindowState}/>}
        </div>
      </main>
   
  )
}

export default App
