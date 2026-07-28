import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full flex flex-row justify-between'>  
      <h1 className='text-2xl text-amber-50 font-semibold'>Robert</h1>
     <div className="flex flex-row gap-5 ml-15 text-amber-50 px-8 py-2.5 rounded-4xl bg-white/10 backdrop-blur-xl border border-white/20">

        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
       <div className="relative group">
       <Link to="/projects" className="flex items-center gap-1"> Projects <i className="ri-arrow-down-s-line"></i></Link>
      <div className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-[#1A2F38] border border-white/10 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
      <Link
      to="/projects/backend"
      className="block px-4 py-3 hover:bg-[#27464D] rounded-b-xl"
    >
      Backend
    </Link>
  </div>
</div>
        <Link to='/process'>Process</Link>
        <Link to='/testimonials'>Testimonials</Link>
        <Link to='/faqs'>FAQs</Link>
      </div>
      <button className='bg-[#C7A550] px-2 font-medium text-amber-50  py-2.5 rounded-4xl'>Get a free quote <span className='px-[0.3rem] py-[0.2rem] rounded-[50%] bg-amber-50 text-[#C7A550]'><i class="ri-arrow-right-up-long-line"></i></span></button>
    </div>
  )
}

export default Navbar
