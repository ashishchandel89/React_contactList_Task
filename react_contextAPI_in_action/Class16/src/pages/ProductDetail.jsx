import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
    const productData=useContext(ProductDataContext);
    const  {id}= useParams();
    
    let selectedProduct='';

    if(productData.length>0){
      selectedProduct=productData.find((elem)=>elem.id==id)
    }
    
  return (
    <div className='w-full h-fit bg-[#ADA9A9] p-20  '>
      <div className='flex flex-row gap-30'>
       <div className='w-[22rem]  h-fit shrink-0 flex flex-col gap-5 border-gray-800 transition-all duration-500 bg-black/10  rounded-2xl p-2 '>

                <div className='w-full h-[80%] bg-gray-800 rounded-2xl p-2'>
                 <img src= {selectedProduct.image} alt='not found' className='w-full h-[22rem] object-contain'></img>
                </div>
                <div className='p-2 h-20 bg-black/30  rounded-2xl flex flex-row items-center justify-between' >
                  <h2 className='text-sm text-white '>{selectedProduct.title}</h2>
                  <h1 className='text-xl text-gray-800 font-semibold'><span className='text-gray-800'>$</span>{selectedProduct.price}</h1>
                   </div>
                  <button className="w-full h-fit cursor-pointer bg-gray-800 px-3 font-medium text-amber-50  py-2.5 rounded-xl ">
        Add to Cart         
        </button>
               
              </div>

              <div>
                <h3 className='text-4xl text-gray-900 font-semibold'>{selectedProduct.title} :-</h3>
                <p className='w-[50rem] mt-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit.sicing elit. Dolorem iure ad iste recusandae tempora soluta fuga quia ipsam quibusdam ratione tenetur facilis quae nesciunt corrupti, debitis sunt corporis ex consequuntur perspiciatis impedit architecto. Libero iste, sed quaerat ducimus, in ipsum ut incidunt voluptatem molestias cumque fugiat atque ab hic, voluptatum autem nesciunt nisi mollitia. Unde, inventore minima. Voluptates voluptatum ipsum veritatis,Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure quae dolorum pariatur inventore obcaecati atque quia optio. Repellat voluptas beatae recusandae eaque, sint provident consectetur similique deserunt saepe consequatur? perspiciatis debitis soluta aliquid laboriosam veniam in, iure nostrum!facere aliquam repudiandae consectetur cupiditate, hic tempore ducimus dolor pariatur. Ipsum impedit aliquid est molestias sed cupiditate hic? Sunt accusantium dolore suscipit delectus debitis ipsa quas doloremque odio aliquid dolorem ab quaerat impedit, architecto quos sequi illo eius distinctio voluptatem placeat vel explicabo! Id ducimus fugiat at sunt alias culpa et voluptatum sint necessitatibus recusandae. Soluta recusandae molestias ea, eaque in, aliquam aut quisquam mollitia necessitatibus, id sit corrupti rerum architecto amet laboriosam voluptate accusamus fugiat at exercitationem dicta cupiditate tempora dignissimos quia modi! Numquam, in pariatur? Veniam excepturi incidunt, voluptates suscipit laboriosam vero culpa repudiandae alias totam sunt quas! Ex, illum quia laboriosam eligendi, voluptas blanditiis quisquam reprehenderit veritatis nulla assumenda pariatur, qui molestiae. Sequi unde voluptatum soluta adipisci incidunt, accusantium assumenda id tempore, quod consectetur est beatae cumque omnis qui eveniet?</p>
                <h1 className='text-xl text-gray-800 font-semibold mt-3'>Price :- <span className='text-gray-800'>$</span>{selectedProduct.price}</h1>
              </div>
      </div>
        
        

    <div className='w-full  h-fit mt-20 border-gray-800 transition-all duration-500 bg-black/10  rounded-2xl p-5 '>

      <h3 className='text-4xl text-gray-900 font-semibold '>Review :-</h3>
      <div>
        <div className='flex flex-row gap-5'>
       <div className='w-[20rem]  h-[15em] mt-5  border-gray-800 transition-all duration-500 bg-black/20  rounded-2xl p-2 '>
        <img src='https://i.pinimg.com/736x/10/09/07/1009075b5f58644ffeb3692e9d1818c3.jpg' className='w-full h-full object-cover rounded-2xl'/>
        </div>
        <div className='w-[20rem]  h-[15rem] mt-5 border-gray-800 transition-all duration-500 bg-black/20  rounded-2xl p-2 '>
        <img src='https://i.pinimg.com/736x/10/09/07/1009075b5f58644ffeb3692e9d1818c3.jpg' className='w-full h-full object-contain rounded-2xl'/>
        </div>
        <div className='w-[20rem]  h-[15rem] mt-5 border-gray-800 transition-all duration-500 bg-black/20  rounded-2xl p-2 '>
        <img src='https://i.pinimg.com/736x/10/09/07/1009075b5f58644ffeb3692e9d1818c3.jpg' className='w-full h-full object-contain rounded-2xl'/>
        </div>
        <div className='w-[20rem]  h-[15rem] mt-5 border-gray-800 transition-all duration-500 bg-black/20  rounded-2xl p-2 '>
        <img src='https://i.pinimg.com/736x/10/09/07/1009075b5f58644ffeb3692e9d1818c3.jpg' className='w-full h-full object-contain rounded-2xl'/>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ProductDetail
