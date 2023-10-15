import React from 'react'
import { AiFillDashboard, AiFillAppstore, AiFillDatabase, AiFillContacts, AiFillPhone, AiFillNotification, AiFillAccountBook,  AiOutlineArrowDown } from "react-icons/ai";
import upma from '../assets/upma.jpg'

function Sidebar() {
  return (
    <div className='slidebar-div'>
      <div className='text-2xl font-bold text text-center flex ml-[10px]'><div className='reacticon'><AiFillAppstore /></div>
       <h1 className='slider-head'>DashBoard</h1> 
      </div>
      <div className='dashboard'>
        <ul >
          <li className='flex cont'><div className='reacticon'><AiFillDashboard /></div>Dashboard </li>
          <li className='flex cont'><div className='reacticon'><AiFillDatabase /></div>Products </li>
          <li className='flex cont'><div className='reacticon'><AiFillContacts /></div>Customers </li>
          <li className='flex cont'><div className='reacticon'><AiFillAccountBook /></div>Income </li>
          <li className='flex cont'><div className='reacticon'><AiFillNotification /></div>Promote  </li>
          <li className='flex cont'><div className='reacticon'><AiFillPhone /></div>Help </li>
        </ul>
      </div>
      <div className='manager'>
        <div><img className='pic h-[30px] w-[30px]' alt="User" src={upma} /></div>
        <div >
          <div className='name'>Evano</div>
          <div className='project'>Project Manager<AiOutlineArrowDown /></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar