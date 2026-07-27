import React from 'react'

const Testimonial = () => {
  return (
    <div>
      <div className="w-full bg-[radial-gradient(circle,#27464D_10%,#040608_100%)] cursor-pointer px-15 py-7 mt-30 flex  gap-10 flex-col rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.4)]  transition-all duration-[1.2s] ease-in hover:shadow-[#C7A550]">
        <h1 className='text-amber-50 text-4xl '>Testimonial :- </h1>
        <div className='flex flex-row gap-8'>
         <img src='https://i.pinimg.com/736x/a7/33/40/a73340eb589b84d77b3ad358dc694740.jpg' className='w-[25rem] h-[30rem] rounded-2xl'></img>
         <img src='https://i.pinimg.com/736x/ca/20/06/ca2006d5a596383b83cb633a7bdda674.jpg' className='w-[25rem] h-[30rem] rounded-2xl'></img>
         <img src='https://i.pinimg.com/vwebp/736x/cf/3a/94/cf3a94240d1497d602fae29a813b407d.webp' className='w-[25rem] h-[30rem] rounded-2xl'></img>
     
    </div>
    </div>
    </div>
  )
}

export default Testimonial
