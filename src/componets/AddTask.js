
import { useState } from "react";
const AddTask=({onAdd})=>{

    const [task,setTask]=useState('');
    const [day,setDay]=useState('');
    const [reminder,setReminder]=useState(false);
    const onSubmit=(e)=>{
       e.preventDefault()

       if(!task)
       {
        alert('Please Add A Task')
        return 
       }
       if(!day)
       {
        alert('Please Add A Date and Day')
        return 
       }

        onAdd({task,day,reminder})
    
       setTask('')
       setDay('')
       setReminder(false)
    
    }
    return(
    <form className="add-form" onSubmit={onSubmit} >
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={task} onChange={(e)=>setTask(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time"  value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className="form-control form-control-check ">
                <label>Reminder</label>
                <input type="checkbox"  value={reminder} checked={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
        <input type="submit" value="Save Task" className="btn btn-block"/>
    </form>
    )
}

export default AddTask