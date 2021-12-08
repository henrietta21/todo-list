import { ADD_TASK } from "./CreateAction"
import { DELETE_TASK } from "./CreateAction"


export const addTask = (newPost) =>{
    return{
        type:  ADD_TASK,
        payload: newPost
    }
}

export const deleteTask = () =>{
    return{
        type:  DELETE_TASK,
    }
}