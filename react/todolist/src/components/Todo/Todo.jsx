import React from 'react';
import {BsFillTrashFill} from 'react-icons/bs'
export default function Todo({todo,onUpdate,onDelete}) {
    const {text,status} = todo
    const handleChange = (e )=>{
        onUpdate({...todo,status : e.target.checked ? 'completed' : 'active'})
    }
    const handleDelete = ()=>{
        onDelete(todo)
    }
    return (
        <li>
            <input type='checkbox' id='checkbox' checked = {status==='completed'} onChange={handleChange}></input>
            <label htmlFor='checkbox'>{text}</label>
            <button onClick={handleDelete}><BsFillTrashFill/></button>
        </li>
    );
}

