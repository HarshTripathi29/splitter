import React from 'react'
import Button from './Button'

const FriendsCards = ({title}) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center h-16 w-36 bg-stone-800 text-white 
                      border-2 rounded-md my-2'>
        {title}
        <Button title="Add"/>
      </div>
    </div>
  )
}

export default FriendsCards
