import React from 'react'
import Bar from './Bar'
import data from '../data'
import { AiOutlineArrowDown } from "react-icons/ai";

function Overview() {
  return (
    <>
      <div>
          <div className='overview-head'> 
            <div>
              <h3 className='text-xl font-bold ml-[15px]'>Overview</h3>
              <p className='ml-[15px]'>Monthly Earnings</p>
            </div>
            <div className='p-4'>
              {/* <p className='quant'>Quantity </p> <div className='quant2'><AiOutlineArrowDown /></div>*/}
              <select name="#" id="#">
                <option value="Quatarly">Quatarly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div> 
            
          </div>

          <div className='bars'>
            {

              data.map((datum) =>
                (<Bar {...datum} />)
              )

            }
          </div>
          {/* <Bar data={data}></Bar> */}
      </div>
    </>
  )
}

export default Overview