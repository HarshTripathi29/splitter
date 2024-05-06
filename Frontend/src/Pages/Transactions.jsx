import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'

const Transactions = () => {

    const [totalAmount, setTotalAmount] = useState(0);
    const [splitedAmount, setSplitedAmount] = useState(0);


    const groupMembers = [
        "Modi", "Rahul", "Soniya", "Mamta"
    ]

    const handleClick=()=>{
        setSplitedAmount(Number(totalAmount)/(groupMembers.length))
    }
    const handleChange=(e)=>{
        setTotalAmount(Number(totalAmount)+Number(e.target.value));
    }

    console.log(totalAmount);
    console.log(splitedAmount);

  return (
    <div className='flex'>
      <Sidebar/>
      <div className='h-screen w-screen bg-neutral-900 text-white p-4'>
        <h1 className='text-3xl font-bold mb-2'>Transactions</h1>
        <div>
        <div classname="my-2">Enter the contribution of group members</div>
            {groupMembers.map((e)=>(
                <div>
                <div>{e}</div>
                <input placeholder='0'        
                className='h-6 w-36 p-1 border-none rounded mb-2 bg-neutral-800'
                onChange={(e)=>{handleChange(e)}}
                />
                </div>
            ))}
        </div>
        <button className='h-8 w-24 bg-neutral-800 rounded-md hover:bg-neutral-900 hover:font-bold
    my-2 text-center cursor-pointer'
    onClick={handleClick}>Split</button>
    <div>Every member has to pay {splitedAmount}</div>
      </div>
      
    </div>
  )
}

export default Transactions
