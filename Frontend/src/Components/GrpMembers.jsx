import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGroup } from '../utils/groupSlice';
import { useNavigate } from 'react-router';

const GrpMembers = ({name}) => {
  // const [arrayGroupMembers, setArrayGroupMembers] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick=()=>{
    // dispatch(addGroup(name));
    // console.log(name);
    navigate("/groups/transactions");
  }
 
  return (
    <div>
      <div className=' flex-col screen mt-12 h-screen bg-neutral-900 border-2 border-neutral-600 rounded-md p-2 '>
      <h1 className='font-bold text-xl'>Group Members</h1>
        <div>
            <ul>
              {name.map((f)=>(
                <li className=''>{f}</li>
              ))}
            </ul>
        </div>
        <button className='h-6 w-32 text-center bg-orange-600 rounded-xl hover:bg-neutral-900 mt-1 hover:font-bold'
        onClick={handleClick}
        >Create Group</button>
      </div>
     
    </div>
  )
}

export default GrpMembers
