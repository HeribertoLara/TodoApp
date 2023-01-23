import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({openModal, setOpenModal}) {
  const onClickButton= () => (
    /* setOpenModal(!openModal) tambien funciona asi */
    setOpenModal(prevState => !prevState)
  )
    return (
    <button 
        onClick={onClickButton}
        className='CreateTodoButton'
        >
            +
        </button>
  )
}

export { CreateTodoButton } 