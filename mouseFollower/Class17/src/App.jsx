import React, { useEffect, useState } from 'react'

const App = () => {
  const [position,setPosition]=useState({x:0,y:0});

  useEffect(()=>{
   const handleMouseMove=(e)=>{
      setPosition({
        x:e.clientX,
        y:e.clientY
      })
   }
  })
  return (
    <div className='w-full h-screen bg-black'>
      <div className='w-6 h-6 rounded-3xl border-2 text-taupe-50' 
        
      >

      </div>
    </div>
  )
}

export default App
