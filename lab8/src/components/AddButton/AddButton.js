import React from 'react';
import './AddButton.css'

export default function Button({onClick}) {
    return (
        <button onClick={onClick} type="button" className="add-btn">Add todo</button>
    );
}