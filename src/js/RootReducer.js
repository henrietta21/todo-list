import { ADD_TASK } from "./CreateAction"
import { DELETE_TASK } from "./CreateAction"
import {DONE_TASK} from './CreateAction'

const initialState= {
    tasks: []
    
}

const reducer = (state=initialState, action) =>{
    switch(action.type) {
        case ADD_TASK: 
        return{
            ...state,
            tasks: [...state.tasks,action.payload]
        }
        case DELETE_TASK:
        return{
            ...state,
            tasks: state.tasks.filter(task => task.id !== action.payload)
        } 
        case DONE_TASK:
        return{
            ...state,
            tasks: state.tasks.map(task => task.id == action.payload ? {...task,done: !task.done} : task)
        }    
        default: return state
    
    }
}

export default reducer