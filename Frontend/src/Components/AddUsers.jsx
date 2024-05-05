import React from 'react'
import FriendsCards from './FriendsCards'
import GrpMembers from './GrpMembers'

const AddUsers = ({groupname}) => {
  return (
    <div className='flex'>
    <div className='w-2/4'>
    <h1 className='font-bold text-2xl'>{groupname}</h1>
      <h1 className='text-xl font-semibold'>Search Friends</h1>
      <div>
        <input 
            type='text'
            placeholder='search friends'
            className='w-1/4 bg-neutral-800 border-none rounded-md mt-2 px-2 h-8'/>
        <button className='h-8 w-24 bg-neutral-800 rounded-md hover:bg-neutral-900 hover:font-bold
          m-1 text-center cursor-pointer'>Search</button>
      </div>
      <div>
        <p>User Found</p>
        <FriendsCards title="Harsh"/>
      </div>
      </div>
      <div>
        <GrpMembers/>
      </div>
    </div>
  )
}

export default AddUsers
