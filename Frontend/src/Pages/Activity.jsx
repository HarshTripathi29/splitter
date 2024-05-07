import React from 'react'
import Sidebar from '../Components/Sidebar'

const Activity = () => {
  return (
    <div className='flex'>
    <Sidebar/>
      <div className='bg-neutral-900 h-screen w-screen'>
        <h1 className='text-white font-bold text-3xl m-2'>Activity</h1>
      </div>
    </div>
  )
}

export default Activity
