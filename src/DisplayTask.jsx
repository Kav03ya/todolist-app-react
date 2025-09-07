import { deltask, toggleTask} from "./helper"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
export default function DisplayTask({list, setTodoList}){
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } }; 
    return (
        <div>
            <ul>
                 {list.map((task)=>{
                    return <li key={task.id} style={{display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px"}}>
                        <span style={{textDecoration: task.completed? "line-through": "none" }}>{task.val}</span> 
                        <Checkbox size="small" {...label}  checked={task.completed} onChange={()=>toggleTask(task.id, setTodoList)}/>
                        <IconButton aria-label="delete" size="small" onClick={()=>deltask(task.id, setTodoList)}>
                        <DeleteIcon fontSize="small" />
                        </IconButton>
                        </li> 
                })}
            </ul>
        </div>
    )
}