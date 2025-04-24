import React from 'react'
import Sidebar from '../Components/Sidebar'
const Dashboard = () => {
  return (
    <>
    <section className='flex'>
      <div>
    <Sidebar/>
    </div>
    <div className='bg-[#0b1f4e] h-10 w-full text-white flex gap-15 text-sm'>
      <p className='ml-90 mt-2'>Welcome Back</p>
      <p className='mt-2'>21 April 2025</p>
      <p className='mt-2'>Monday</p>
    </div>
    </section>
    </>
  )
}

export default Dashboard