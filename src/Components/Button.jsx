import React from 'react'

const Button = ({title}) => {
  return (
    <div>
        <div className='h-8 w-24 bg-stone-800 border-2 rounded-md hover:bg-stone-900 
                        m-1 text-center cursor-pointer'>
        {title}
        </div>      
    </div>
  )
}

export default Button
