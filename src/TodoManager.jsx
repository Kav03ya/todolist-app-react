import { useState } from "react";
import ActionButton from "./ActionButton";
import TextField from '@mui/material/TextField';
import {handleNewTask, handleClick, markAllDone, delAllTask} from './helper'
import DisplayTask from "./DisplayTask";
export default function TodoManager(){
    let [todolist,setTodoList] = useState([]);
    let [newTask,setNewTask] = useState("");
    return (
        <div>
            <TextField id="task" label="Enter task" variant="standard" value={newTask} onChange={(event)=>handleNewTask(event,setNewTask)}/>
            <br></br>
            <br></br>
            <ActionButton text = "Add task" variant="outlined" onClicking={()=>handleClick(newTask, setTodoList, setNewTask)}/>
            <br></br>
            <h2>To-do List</h2>
             <hr></hr>
            <DisplayTask list={todolist} setTodoList={setTodoList} />
            <br></br>
            <ActionButton text="Mark all done" variant="contained" color="success" onClicking={()=>markAllDone(setTodoList)}/>
            <br></br>
            <ActionButton text= "Delete all tasks" variant="outlined" color="error" onClicking={()=>delAllTask(setTodoList)}/>
        </div>
    )
}