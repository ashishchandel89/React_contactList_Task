import React from 'react'

const Services = () => {
  return (
    <div>
      <div className="w-full bg-[radial-gradient(circle,#27464D_10%,#040608_100%)] cursor-pointer px-15 mb-20 py-7 mt-30 flex  gap-10 flex-col rounded-3xl shadow-[0_0_30px_rgba(0,0,0,0.4)]  transition-all duration-[1.2s] ease-in hover:shadow-[#C7A550]">
        <h1 className='text-amber-50 text-4xl '>Services:- </h1>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-row gap-8'>
         <img src='https://i.pinimg.com/736x/93/71/4e/93714efc6dfacf09819028aa775ece03.jpg' className='w-[20rem] h-[25rem] rounded-2xl'></img>
         <img src='https://i.pinimg.com/736x/a6/4c/03/a64c03ffaea291bc47e1268e443030e5.jpg' className='w-[20rem] h-[25rem] rounded-2xl'></img>
          <img src='https://i.pinimg.com/736x/ac/98/83/ac988314e3fcd3c368e3308d83be99e8.jpg' className='w-[20rem] h-[25rem] rounded-2xl'></img>
         <img src='https://i.pinimg.com/736x/71/10/b5/7110b5d17b67be8fa73c51f870abdfb0.jpg' className='w-[20rem] h-[25rem] rounded-2xl'></img>
        </div>
        <div>
      <p className='text-xl text-amber-50 text-justify' >  Pores placeat quae amet nihil, nulla vero! Debitis quos qui, deserunt sint illum explicabo maiores voluptatibus! Alias, labore quos ullam obcaecati aliquam deserunt perspiciatis consequuntur qui iusto asperiores, in ab provident doloribus voluptas tempora, libero recusandae. Asperiores sit laudantium rerum architecto nisi.
            </p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Services
