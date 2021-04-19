import React, { useState } from 'react';
import './Todo.css'
import cross_svg from './img/cross.svg'
import pencil_svg from './img/pencil.svg'

export default function Todo({crossClick, deleteFunc, todo, Name}) {
    const [text, setText] = useState(Name);

    const handleEdit = (e) => {
        let editBtn = (e.type === 'click') ? e.currentTarget : e;
        let id = editBtn.id.slice(0, 5);
        const index = todo.indexOf(id);
        let label = document.querySelector('#' + todo[index] + '+ label > span.check--label-text');
        let textarea = document.querySelector('#' + todo[index] + '+ label > .edit-label-text');
        editBtn.classList.toggle('editable');

        if (editBtn.classList.contains('editable')) {
            textarea.value = text;
            label.classList.toggle('check--label-text-display');
            textarea.classList.toggle('edit-label-text-display');
            textarea.focus();
        } else if (textarea.value === "") {
            deleteFunc(id);
        } else {
            if (window.innerWidth < 320) {
                setText(textarea.value.slice(0, 10));
            } else if (window.innerWidth < 570) {
                setText(textarea.value.slice(0, 15));
            } else {
                setText(textarea.value.slice(0, 25));
            }
            label.classList.toggle('check--label-text-display');
            textarea.classList.toggle('edit-label-text-display');
        }
    };

    const enterHandler = (e) => {
        if (e.key === 'Enter') {
            let button = document.querySelector('#' + Name + 'a' + ' + button');
            handleEdit(button);
        }
    };

    return (
        <li className="list-item">
        <input type="checkbox" className="hidden-box" id={Name}/>
        <label htmlFor={Name} className="check--label">
            <span className="check--label-box"></span>
            <span className="check--label-text">{text}</span>
            <textarea className="edit-label-text" onKeyPress={enterHandler} id={Name + 'a'} rows="1" wrap="off"></textarea>
            <button onClick={handleEdit} id={Name + 'p'} type="button" className="change-btn">
                    <img src={pencil_svg} className="svg-pencil" alt="edit"></img>
            </button>
            <button onClick={crossClick} id={Name + 'c'} type="button" className="delete-btn">
                    <img src={cross_svg} className="svg-cross" alt="cross"></img>
            </button>
        </label>
    </li>
    );
}