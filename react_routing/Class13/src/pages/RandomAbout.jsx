import React from 'react'
import { useParams } from 'react-router-dom'

const RandomAbout = () => {
    const params=useParams();
    console.log(params)
  return (
    <div>
      <div className="w-full bg-[radial-gradient(circle,#27464D_10%,#040608_100%)] cursor-pointer px-15 py-7 mt-30 flex  gap-10 flex-col rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.4)]  transition-all duration-[1.2s] ease-in hover:shadow-[#C7A550]">
        <h1 className='text-amber-50 text-4xl '>Random File :- </h1>
         <img src='https://i.pinimg.com/736x/12/eb/c2/12ebc2e649939bf4ecfbf90d78778889.jpg' className='w-full h-[35rem] rounded-2xl'></img>
        
    </div>
    </div>
  )
}

export default RandomAbout
