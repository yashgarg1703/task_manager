
import {useState} from 'react'
import Header from "./componets/Header";
import Tasks from "./componets/Tasks";
import AddTask from "./componets/AddTask";
const App=()=>
{
    const [showAddTask,setshowAddTask]=useState(true);
    const [tasks,settasks]= useState (
        [
        {
          id:1,
          task:'Shopping',
          day:'Apr 10 at 9:00am',
          reminder:true
        },
        {
          id:2,
          task:'Dinner At RajMahal' ,
          day:'Apr 11 at 2:00pm',
          reminder:true
        },
        {
              id:3,
              task:'Movie',
              day:'Apr 11 at 9:00pm',
              reminder:true
        },
        ]
    )
    const DeleteTask=(id)=>{
       settasks(tasks.filter((task)=>
       task.id!==id
       ))
    }
    const ToggleReminder =(id)=>{
      settasks(
        tasks.map((task)=>
        task.id===id?{...task,reminder:
        !task.reminder}  :task
        )
      )
    }
    const onAdd=(task)=>
    {
        const id=Math.floor(Math.random()*10000)+1
        const newTask={id,...task}
        settasks([...tasks,newTask])
    }
    return (
        <div className="container">
       <Header onAdd={()=> setshowAddTask
       (!showAddTask)} 
       showAdd={showAddTask} />
       {showAddTask && <AddTask onAdd={onAdd}/>}
       {tasks.length>0 ?(<Tasks tasks={tasks} onDelete={DeleteTask} onToggle={ToggleReminder}/>):"NO TASKS TO SHOW"}
        </div>
    )
}
export default App