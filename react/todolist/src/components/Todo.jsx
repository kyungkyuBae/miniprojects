import React, { useState } from 'react';
import {BsFillTrashFill} from 'react-icons/bs'
export default function Todo ({action}) {
    const [onCheck,setOnCheck] = useState(false);
    const handleCheck = ()=> {
        setOnCheck(!onCheck)
    }

    console.log(onCheck);
    return (
        <>
        <div className='flex justify-between'>
            <div>
            <input  type='checkbox' className='mr-1' value={onCheck} onClick={handleCheck}></input>
            {onCheck ? <span className='text-white line-through' >{action}</span> : <span className='text-white' >{action}</span>}
            </div>
            <button className='text-white'><BsFillTrashFill /></button>
        </div>
        </>
    )
}