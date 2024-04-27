import React from 'react'
import Button from './Button'

const CreateGroups = () => {
  return (
    <div>
      <div>
        <h1 className='text-3xl text-white mt-8'>Create Group</h1>
        <input 
            type='text' 
            placeholder='enter group name'
            className='w-2/4 bg-transparent border-2 rounded-sm mt-2 h-8'
        />
        <div className='flex'>
        <Button title="Create"/>
        <Button title="Cancel"/>
        </div>
      </div>
    </div>
  )
}

export default CreateGroups
