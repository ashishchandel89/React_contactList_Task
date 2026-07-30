import React, { createContext, useContext, useEffect, useState } from 'react'
import { getProductData } from '../api/ProductData'


export const ProductDataContext=createContext()

const ProductContext = (props) => {

       const [productData,setProductData]= useState([])

       const setData=async ()=>{
            setProductData(await getProductData());
       }
       
      
    useEffect(function(){
        setData()
        console.log('hello')
    },[])

  return (
    <div>
        <ProductDataContext.Provider value={productData}>
            {props.children}
        </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext
