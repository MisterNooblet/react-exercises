import React, { useReducer } from 'react'
import LSM from '../utils/LocalStorageManager'

const taskReducer = (state, action) => {
    if (action.type === 'toggle') {
        return { complete: !state.complete }
    }
    return { complete: false }
}

const TodoCard = ({ task, done, id, tasks }) => {
    const [taskDone, dispatchTaskDone] = useReducer(taskReducer, { complete: done })
    const removeTask = () => {
        console.log('id', id);
        tasks(LSM.removeTask(id))
    }
    const toggleDone = () => {
        LSM.updateTask(id)
        console.log(taskDone);
        dispatchTaskDone({ type: 'toggle' })
        console.log(taskDone);
    }
    return (
        <div className={`todo_card task_${taskDone.complete ? `done` : `pending`}`}>
            <span className='span' onClick={toggleDone}><h3>{taskDone.complete ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}{task}</h3></span><button onClick={removeTask}>Delete</button>
        </div>
    )
}

export default TodoCard