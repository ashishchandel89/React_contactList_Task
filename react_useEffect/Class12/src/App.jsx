import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

    const [title,setTitle]=useState('');
    const [count,setCount]=useState(0);
    const [data,setData]=useState('');

    const getData=async ()=>{
         let response=await axios.get('https://randomuser.me/api');
        setData(response.data.results[0].name.first+" "+response.data.results[0].name.last)
    }
    

    useEffect(()=>{
        getData()
    },[title])
    


  return (
    <div className='w-full h-screen bg-black p-10 flex flex-col justify-center items-center gap-8'>
        <input type='text' value={title} onChange={(elem)=>{setTitle(elem.target.value)}} className='border-2 border-white text-3xl px-4 rounded-2xl py-5 font-semibold text-white'></input>
        <h1 className='text-4xl text-pink-300 font-semibold mt-5'>{data}</h1>
        <h2 className='text-9xl text-yellow-400 font-semibold mt-5'>{count}</h2>
        <button className='px-12 py-5 text-center rounded-2xl text-4xl text-amber-50 bg-green-800 font-semibold active:scale-95' onClick={()=>{setCount(count+1)}}>Increase</button>
    </div>
  )
}

export default App
