import React from 'react'
import Card from './Card'
import cardData from '../cardData'
import { FaSistrix } from 'react-icons/fa'

function Cards() {
  // console.log(cardData);
  return (
    <div className='Navbar-div'>
      <div className='Navbar-head'>
        <div>
          <h3 className='font-bold'>Hello Shahrukh</h3>
        </div>
        <div className='flex'>
          <span className='searchicon pt-[3px]  bg-white '> <FaSistrix /></span><span className=''><input className='input bg-white rounded-sm w-[130px]' type="text" placeholder='Search Here' /></span>
        </div>
      </div>

      <div className='cards'>
        {
          cardData.map((data) =>
            (<Card {...data} />)
          )
        }
      </div>
    </div>
  )
}

export default Cards

