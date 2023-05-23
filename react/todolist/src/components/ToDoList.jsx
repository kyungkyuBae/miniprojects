import React from 'react';
import Main from './Main';
import Header from './Header';
import AddTodo from './AddTodo';


export default function ToDoList() {
    return (
        <>
            <Header />
            <Main />
            <AddTodo />
        </>
    );
}

