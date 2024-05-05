import React from 'react'
import Button from './Button'

const FriendsCards = ({title}) => {
  return (
    <div className='flex'>
      <div className='flex items-center justify-between h-8 w-1/4 bg-neutral-800 px-2 text-white 
         rounded-md'>
        {title}
        
      </div>
      <button 
         className='h-8 w-24 bg-neutral-800 rounded-md hover:bg-neutral-900 text-center 
          cursor-pointer mx-1'
        >Add</button>
    </div>
  )
}

export default FriendsCards
