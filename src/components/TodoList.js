import React from 'react'
import {useSelector,useDispatch} from "react-redux"


function TodoList() {
    const dispatch= useDispatch()
    const tasks= useSelector(state => state.tasks)
    const handleDelete = id => dispatch({
        type: "DELETE_TASK",
        payload: id
    })
    const handleDone = id => dispatch({
        type: "DONE_TASK",
        payload: id
    })

    return (
        <div className="output">
           {
               tasks.map((task, key) =>(
               <div key={key} className="todo">
                <div className="todo-task">
                <span className={task.done?"done": "undone"}>{task.description}</span>
                </div>
               <button className="btn" onClick={()=> handleDone(task.id)}>Done</button> 
               <button className="btn" onClick={()=>handleDelete(task.id)}>Delete</button> 
               </div>
               ))
           }
        </div>
    )
}


export default TodoList

