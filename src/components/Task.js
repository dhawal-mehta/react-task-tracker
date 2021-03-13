import { FaTimes } from 'react-icons/fa' 

const Task = ({tasks, deleteTask, toggleReminder}) => {
    // const classNameI = "task "
    return (
        <>
            { tasks.map( (task) => (
                
                <div className={`task ${task.reminder === true?"reminder":''}`} key={task.id} onDoubleClick={() => toggleReminder(task.id)}>
                    <h3>{task.text} <FaTimes style={{color:'red', cursor:'pointer'}} onClick={() => deleteTask(task.id)} /></h3>
                    <p>{ task.day }</p>
                </div>
            ))}
        </>
    )
}
 
export default Task
