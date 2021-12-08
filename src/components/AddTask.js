import React , {useState} from 'react'
import {addTask} from "../js/Actions"
import {useDispatch,useSelector} from "react-redux"




function AddTask() {
    const dispatch= useDispatch()
    const [input, setInput] =useState("")
    const handleChange = e => setInput(e.target.value)
  
    const handleClick = (post) => {dispatch(addTask(post={
        id: Date.now(),
        description: input,
        done: false
    }),
    setInput(""))}
    

    return (
        <div className="input">
            <input type="text" placeholder="I should....." value={input} onChange={handleChange}/>
            <button className="btn" onClick={handleClick}>ADD</button>
        </div>
    )
}





export default AddTask
