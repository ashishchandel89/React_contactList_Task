import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme,setTheme]= useState('Light')
  const changeTheme=(newTheme)=>{
    setTheme(newTheme)
  }
  return (
    <div className='w-full h-screen bg-black p-10 flex gap-10 flex-col items-center'>
        <h1 className='text-4xl text-amber-50 text-center font-bold font-mono'>Today's THEME : {theme}</h1>
        <Navbar changeTheme={changeTheme}/>
    </div>
  )
}

export default App
