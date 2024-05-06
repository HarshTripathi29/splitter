import React from 'react'
import Sidebar from '../Components/Sidebar'

const Profile = () => {
  return (
    <div className='flex'>
    <Sidebar/>
      <div className='bg-neutral-900 h-screen w-screen text-white'>
        <h1 className='text-2xl m-2 font-bold'>Profile</h1>
        <div className='w-1/4 h-40 p-2 bg-neutral-800 mx-4 rounded-md'>
          <div className='font-bold'>Account</div>
          <div>UserName : harsh</div>
          <div>email : harsh@gmail.com</div>
          <button className='my-2 h-8 w-32 bg-neutral-900 rounded-md hover:font-bold
     text-center cursor-pointer'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
