import React from 'react'
import Button from './Button'
import CreateGroups from './CreateGroups'
import GroupCard from './GroupCard'
import AddUsers from './AddUsers'

const MainContainer = () => {
  return (
    <div>
      <div className='h-screen w-screen bg-stone-900 text-white p-4'>
        <h1 className='text-4xl my-2'>Groups</h1>
        <p>You are not part of any group</p>
        <Button title="Add Group"/>
        <CreateGroups/>
        <GroupCard/>
        <AddUsers/>
      </div>
    </div>
  )
}

export default MainContainer
