import React, { useState } from 'react'
import Button from './Button'
import GroupCard from './GroupCard';

const CreateGroups = () => {

  const[showGroupCard, setShowGroupCard] = useState(false);
  const[createGroup, setCreateGroup] = useState("");
  const[showCreateGrp, setShowCreateGrp] = useState(true);

  const handleCreateClick=()=>{
    setShowGroupCard(true);
    setShowCreateGrp(false);
  }

  const handleCancelClick=()=>{
    setShowGroupCard(false);
  }

  const handleChange=(e)=>{
    setCreateGroup(e.target.value);
    console.log("CreateGroup");
  }

  return (
    <div>
      <div>

      {showCreateGrp && (<>
        <h1 className='text-2xl text-white mt-8 font-bold'>Create Group</h1>
        <input 
            type='text' 
            placeholder='enter group name'
            className='w-2/4 bg-neutral-800 border-none rounded-md mt-2 h-8 px-2'
            onChange={handleChange}
        />
        <div className='flex'>

        <button 
        className='h-8 w-24 bg-neutral-800 border-none rounded-md hover:bg-neutral-900 hover:font-bold
        mt-1 mr-1 text-center cursor-pointer'
        onClick={handleCreateClick}
        >Create</button>

       <button 
        className='h-8 w-24 bg-neutral-800 border-none rounded-md hover:bg-neutral-900 hover:font-bold
        mt-1 mr-1 text-center cursor-pointer'
        onClick={handleCancelClick}
        >Cancel</button>
        </div>

        </>)}
        {showGroupCard && <GroupCard grpname={createGroup}/>}
       
      </div>
    </div>
  )
}

export default CreateGroups
