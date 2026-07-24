import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import User from './components/User'

const App = () => {
  const [allData,setAllData]=useState([])
    const getData=async ()=>{
      
      const response=await axios.get("https://picsum.photos/v2/list?page=2&limit=100");
      setAllData(response.data)
    }


    useEffect(function(){
      getData()
    },[])


  return (
    <div className='w-full h-full bg-black text-amber-50   p-10'>
     <div className='w-full text-4xl p-8 bg-linear-to-r/srgb from-fuchsia-600 to-70% font-semibold border-amber-50 border-5 rounded-2xl flex justify-center items-center'> 
      <h1>Run Axios</h1>
     </div>
    
      <div className='flex flex-row flex-wrap justify-between gap-20 mt-20'>
        {allData.map(function(elem,idx){
          return <div key={idx}>
            <User elem={elem}/>
            </div>
        })}
      </div>
    </div>
  )
}

export default App
