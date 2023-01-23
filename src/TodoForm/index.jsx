import React from 'react'
import './TodoForm.css'
import { useState } from 'react';
import { TodoContext } from '../TodoContext'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = useState([]);

    const {
        addTodo,
        setOpenModal} =  React.useContext(TodoContext);

    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
        //TODO
    }
    const onCancel = ()=>{
        setOpenModal(false)
        //TODO
    }
    
    const onSubmit = (event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false)
    }

    
    return (
    <form onSubmit={onSubmit}>
        <label>...</label>
        <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder='Cortar  la cebolla '/>

        <div className="TodoForm-buttonContainer">
            <button
                className="TodoForm-button TodoForm-button--cancel"
                type='button'
                onClick={onCancel}>cancelar</button>
            <button
                type='submit'
                className="TodoForm-button TodoForm-button--add"
            >Anadir</button>
        </div>

    </form>
  )

}
export {TodoForm}