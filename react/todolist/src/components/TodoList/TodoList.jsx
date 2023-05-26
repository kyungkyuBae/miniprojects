import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';


export default function Todolist({filter}) {
    const [todos,setTodos] = useState(
    [
        {id : 1,text : '오늘의', status : 'active'},
    {id : 2,text : '할일은', status : 'active'},
    {id : 3,text : '뭔가요', status : 'active'}
])
    const handleAdd = (todo)=>{setTodos(prev=>[...prev,todo])}
    const handleUpdate = (updated)=>{setTodos(todos.map(t=> t.id === updated.id ? updated : t))}
    const handleDelete = (deleted)=>{setTodos(todos.filter(t=> t.id !== deleted.id ))}
    const filtered = getFilteredItems(todos,filter)
    return (
        <section>
            <ul>
                {
                filtered.map(todo=>
                    <Todo key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete}/>)
                }
            </ul>
            <AddTodo onAdd={handleAdd} />
        </section>
    );
}
function getFilteredItems(todos,filter){
    if (filter === 'all'){
        return todos
    }
    else{return todos.filter(item=>item.status===filter)}
}