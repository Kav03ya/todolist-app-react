import { v4 as uuidv4 } from 'uuid';
let handleNewTask=(event,setNewTask)=>{
        let task=event.target.value;
        setNewTask(task);
}

let handleClick=(newTask, setTodoList, setNewTask)=>{
    if(!newTask.trim())
        return; //ignore empty task
    setTodoList((prevList)=>{
        return [...prevList,{id: uuidv4(), val: newTask, completed: false}] 
    })
    setNewTask("");
}

let deltask=(taskId, setTodoList)=>{
    setTodoList((prevList)=> prevList.filter((task)=>task.id!=taskId)) 
}


let toggleTask=(taskId,setTodoList)=>{
    setTodoList((prevList)=>prevList.map((task)=>task.id===taskId? {...task, completed : !task.completed} : task))
}

let markAllDone=(setTodoList)=>{
    setTodoList((prevList)=>prevList.map((task)=>{return {...task, completed : true}}))
}

let delAllTask=(setTodoList)=>{
    setTodoList([]);
}
export {handleNewTask, handleClick, deltask, toggleTask, markAllDone, delAllTask}