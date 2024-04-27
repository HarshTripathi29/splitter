import React from 'react'
import FriendsCards from './FriendsCards'

const AddUsers = () => {
  return (
    <div>
      <h1 className='text-3xl'>Search Friends</h1>
      <div>
        <input 
            type='text'
            placeholder='search friends'
            className='w-1/4 bg-transparent border-2 rounded-sm mt-2 h-8'/>
      </div>
      <div>
        <p>User Found</p>
        <FriendsCards title="Harsh"/>
      </div>
    </div>
  )
}

export default AddUsers
