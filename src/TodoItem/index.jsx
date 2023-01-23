import React from 'react'
import './TodoItem.css';
function TodoItem(props) {
    const onComplete = ()=>{
        alert('ya completaste  el Todo ' + props.text)
    }
    const onDelete = ()=>{
        alert('Borraste el Todo ' + props.text)
    }
  return (
    <li className='TodoItem'>
        <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}

            >{props.completed  ? '😁':'😒'}
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`} >{props.text}</p>
        <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            >
                ❌
        </span>
    </li>
  )
}

export { TodoItem }