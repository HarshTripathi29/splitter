import React, { useState } from 'react'
import Button from './Button'
import CreateGroups from './CreateGroups'
import GroupCard from './GroupCard'
import AddUsers from './AddUsers'

const MainContainer = () => {

  const[showCreateGroup, setShowCreateGroup] = useState(false);
  const[showAddBtn, setShowAddBtn] = useState(true);

  const handleClick=()=>{
    setShowCreateGroup(!showCreateGroup);
    // setShowAddBtn(!showAddBtn);
    console.log("btn clicked");
  }
  
  return (
    <div>
      <div className='h-screen w-screen bg-neutral-900 text-white p-4'>
        <h1 className='text-4xl my-2 font-bold'>Groups</h1>

        {showAddBtn && (
          <>
        <p>You are not part of any group</p>
        <button 
          className='h-8 w-24 bg-neutral-800  rounded-md hover:bg-neutral-900 hover:font-bold
                        m-1 text-center cursor-pointer'
          onClick={handleClick}>Add Group</button>
          </>
        )}
        {
          showCreateGroup && <CreateGroups/> 
        }
     
      </div>
    </div>
  )
}

export default MainContainer
