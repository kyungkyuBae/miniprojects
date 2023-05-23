import React, { useState } from 'react';
import Todo from './Todo';

export default function Main() {
    const [todoList,setTodoList] = useState(['오늘','할일은'])
    return (
        <div className='px-3 py-3 bg-slate-700 h-64' >
            
            <Todo action='오늘'/>
            
        </div>
    );
}

