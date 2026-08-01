import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { all } from 'axios';
import { Link } from 'react-router-dom';

const Product = () => {

  const allProductData=useContext(ProductDataContext);

  return (
    <div className='w-full h-screen bg-[#ADA9A9] flex fle-row gap-4  flex-nowrap overflow-auto scrollbar-none justify-between items-center'>
      
        {
          allProductData.map((elem,idx)=>{
            return <Link to={`/product/${elem.id}`} key={idx}>
              <div className='w-[22rem]  hover:w-[25rem]  h-[35rem] hover:h-[38rem] border-gray-800 transition-all duration-500 bg-black/10  rounded-2xl p-2 '>

                <div className='w-full h-[80%] bg-gray-800 rounded-2xl p-2'>
                 <img src= {elem.image} className='w-full h-full object-contain'></img>
                </div>
                <div className='p-2 h-20 bg-black/30 mt-7 rounded-2xl flex flex-row items-center justify-between' >
                  <h2 className='text-sm text-white '>{elem.title}</h2>
                  <h1 className='text-xl text-gray-800 font-semibold'><span className='text-gray-800'>$</span>{elem.price}</h1>
                </div>
              </div>
            </Link>

          })
        }
    </div>
  )
}

export default Product
