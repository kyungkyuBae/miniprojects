import React from 'react';
import Main from './Main';
import Header from './Header';
import AddTodo from './AddTodo';


export default function ToDoList() {
    return (
        <section className="w-96 h-96 bg-cyan-300 flex-col">
            <Header />
            <Main />
            <AddTodo />
            
        </section>
    );
}

