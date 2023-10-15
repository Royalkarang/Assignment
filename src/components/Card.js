import React from 'react'

function Card(data) {
  // 
  console.log(data);
  return (
    <div className='card '>
      <div className='cardIcon' style={{ background: `${data.bgcolor}`, color: `${data.color}` }}>

        {data.icon}

      </div>
      <div className='carddata m-[auto]'>
        <p className='font-light text-[1rem] '>{data.type}</p>
        <p className='font-bold '>{data.money}</p>
        <div className='text-[.8rem] flex gap-1'>
          <div style={{ color: `${data.color}` }}>{data.increment}</div>
          <div>this month</div>
        </div>
      </div>
    </div>
  )
}

export default Card