import React, { useState } from 'react';
import './TodoList.css';
import Button from '../AddButton/AddButton'
import Todo from '../Todo/Todo'

export default function TodoList() {
    const [todo, setTodo] = useState([]);

    const SIZE = 8;

    const exampleArr = [];
    for (let i = 0; i < SIZE; i++) {
        exampleArr.push("Task" + (i + 1));
    }
    
    const handleAdd = () => {
        if (todo.length < SIZE) {
            let i = 0;
            for (i = 0; i < SIZE; i++) {
                if (!todo.includes(exampleArr[i])) {
                    break;
                }
            }
            setTodo([...todo, "Task" + (i + 1)]);
        }
    };

    const handleDelete = (e) => {
        let id = e.currentTarget.id.slice(0, 5);
        deleteTodo(id);
    };

    const deleteTodo = (id) => {
        const index = todo.indexOf(id);
        todo.splice(index, 1);
        setTodo([...todo]);
    };

    return (
        <div className="TodoList-container">
            <ul className="TodoList">
                {todo.map((el) => (<Todo key={el} crossClick={handleDelete} deleteFunc={deleteTodo} todo={todo} Name={el}/>))}
            </ul>
            <Button onClick={handleAdd}/>
        </div>
    );
}