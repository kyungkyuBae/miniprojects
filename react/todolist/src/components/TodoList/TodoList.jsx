import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';


export default function Todolist({filter}) {
    const [todos,setTodos] = useState(()=>readTodo())
    const handleAdd = (todo)=>{setTodos(prev=>[...prev,todo])}
    const handleUpdate = (updated)=>{setTodos(todos.map(t=> t.id === updated.id ? updated : t))}
    const handleDelete = (deleted)=>{setTodos(todos.filter(t=> t.id !== deleted.id ))}
    const filtered = getFilteredItems(todos,filter)

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos));
        

    },[todos])
    return (
        <section className={styles.container}>
            <ul className = {styles.list}>
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

function readTodo () {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : []
}