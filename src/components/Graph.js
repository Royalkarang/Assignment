import React from 'react'
import Overview from './Overview'
import Customers from './Customers'

function Graph() {
  return (
    <div className='graph-div'>
      <div className='overview-div'>
        <Overview />
      </div>

      <div className='costumer-div'>
        <div className=' ml-4 mt-3'>
          <h3 className='font-bold'>Customers</h3>
          <p className='text-[12px]'>Customers That buy Products</p>
        </div>
        <div>
          <Customers />
        </div>

      </div>
    </div>
  )
}

export default Graph