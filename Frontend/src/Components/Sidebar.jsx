import React from 'react'
import SideCards from './SideCards'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (

    
    <div>
      <div className='h-screen w-48 bg-neutral-800 flex flex-col justify-top items-center'>
        <Link to="/groups"><SideCards title="Groups"/></Link>
        <Link to="/friends"><SideCards title="Friends"/></Link>
        <Link to="/activity"><SideCards title="Activity"/></Link>
        <Link to="/profile"><SideCards title="Profile"/></Link>
      </div>
    </div>
  )
}

export default Sidebar
