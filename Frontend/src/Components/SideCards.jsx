import React from 'react'

const SideCards = ({title}) => {
  return (
    <div>
      <div className='flex items-center justify-center h-12 w-36 bg-transparent text-white 
                        hover:border-2 rounded-md hover:bg-stone-900 my-1 cursor-pointer'>
        {title}
      </div>
    </div>
  )
}

export default SideCards
