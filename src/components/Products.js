import React from 'react'
import productData from '../productData'
import Product from './Product'
import { FaSistrix,FaAngleDown } from 'react-icons/fa'

function Products() {
  return (
    <div className='bg-white rounded-xl'>
      <div className='products flex justify-between font-bold m-[10px]'>
        <div>
          <h3>Product Sell</h3>
        </div>
        <div className='flex '>
         <span className='searchicon pt-[3px]  bg-gray-200 '> <FaSistrix /></span><span className=''><input  className='input bg-gray-200 rounded-sm w-[130px]' type="text" placeholder='Search Here' />
         </span>
         <select name="" id=""></select>
         {/* <span className='text-[14px] ml-[10px] rounded-sm mr-[10px] bg-gray-200 font-light'>Last 30 days </span><span className='mr-[10px] m-auto'><FaAngleDown/></span> */}
        </div>

      </div>
      <div className='flex justify-between m-[10px]'>
        <p>Product Name</p>
        <div className='flex  mr-[55px] gap-11'>
          <p>Stock</p>
          <p>Price</p>
          <p>Total Sales</p>
        </div>
      </div>
      <hr className='bg-black h-[2px] '/>


      <div>
        {
          productData.map((data) => {
            return <Product {...data} />
          })
        }
      </div>

    </div>
  )
}

export default Products