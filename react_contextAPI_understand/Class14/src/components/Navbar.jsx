import React, { useState } from 'react'

const Navbar = (props) => {
    const [newTheme,setnewTheme]=useState('');
  return (
     <>
       <form className='w-[25rem] h-fit flex flex-col gap-5 text-amber-50 px-5 py-8  rounded-4xl bg-white/10 backdrop-blur-xl border border-white/20'
        onSubmit={(e)=>{
        e.preventDefault();
        props.changeTheme(newTheme);
       }}>
        <h1 className='text-4xl text-center font-bold font-mono'>THEME</h1>
        <input type='text' 
        value={newTheme} 
        placeholder='Enter Your Favarouite Theme' 
        className='w-full h-fit border-2 border-white/30 py-2 px-3 rounded-xl'
        onChange={(e)=>{
            setnewTheme(e.target.value);
        }}
        ></input>
        <button className='px-2 py-1.5 bg-emerald-700 rounded-xl mb-8'>Submit</button>
       </form>
      
    </>
  )
}

export default Navbar
