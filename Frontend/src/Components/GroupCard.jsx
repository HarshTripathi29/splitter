import React, { useState } from 'react'
import Button from './Button'
import AddUsers from './AddUsers';

const GroupCard = ({grpname}) => {

  const[showAddUser, setShowAddUser] = useState(false);
  const[showGrpCard, setShowGrpCard] = useState(true);

  const handleClick=()=>{
    console.log(" add user button clicked");
    setShowAddUser(!showAddUser);
    // setShowGrpCard(!showGrpCard);
  }
  return (
    <div className='flex bg-neutral-900 w-screen h-screen'>
    {showGrpCard && (<>
      <div className='flex flex-col h-8 w-1/4 bg-neutral-900 text-white 
                       rounded-md my-4 cursor-pointer'>
      <div className='text-left'>
        {grpname}
      </div>
      <button onClick={handleClick}
      className='h-8 w-24 bg-neutral-800 border-none rounded-md hover:bg-neutral-900 
      hover:font-bold mt-2 text-center cursor-pointer'
      >Add User</button>
      </div>
      </>)}
      <div>
      {showAddUser && <AddUsers groupname={grpname}/>}
      </div>
    </div>
  )
}

export default GroupCard
