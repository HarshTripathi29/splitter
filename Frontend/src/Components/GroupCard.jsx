import React from 'react'
import Button from './Button'

const GroupCard = ({title}) => {
  return (
    <div>
      <div className='flex items-center justify-between h-8 w-2/4 bg-stone-800 text-white 
                      hover:border-2 rounded-md hover:bg-stone-900 my-4 cursor-pointer'>
      <div className='text-left'>
        {title}
      </div>
      <Button title="Add Users"/>
      </div>
    </div>
  )
}

export default GroupCard
