import React, { useState } from 'react'
import LSM from '../utils/LocalStorageManager'

const TodoCard = ({ task, done, id, tasks }) => {
    const [isDone, setIsDone] = useState(done)
    const removeTask = () => {
        console.log('id', id);
        tasks(LSM.removeTask(id))
    }
    const toggleDone = () => {
        LSM.updateTask(id)
        setIsDone(!isDone)
    }
    return (
        <div className={`todo_card task_${isDone ? `done` : `pending`}`}>
            <span className='span' onClick={toggleDone}><h3>{isDone ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}{task}</h3></span><button onClick={removeTask}>Delete</button>
        </div>
    )
}

export default TodoCard