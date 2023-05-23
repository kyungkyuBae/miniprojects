import React, { useState } from 'react';
import {BsFillTrashFill} from 'react-icons/bs'
export default function Todo ({action,setTodoList,todoList}) {
    const [onCheck,setOnCheck] = useState(false);
    const handleCheck = ()=> {
        setOnCheck(!onCheck)
    }
    const handleDelete = ()=>{
        setTodoList([...todoList].filter(todo=>todo!==action))
    }

    return (
        <>
        <div className='flex justify-between'>
            <div>
            <input  type='checkbox' className='mr-1' value={onCheck} onClick={handleCheck}></input>
            {onCheck ? <span className='text-white line-through' >{action}</span> : <span className='text-white' >{action}</span>}
            </div>
            <button onClick={handleDelete} className='text-white'><BsFillTrashFill /></button>
        </div>
        </>
    )
}