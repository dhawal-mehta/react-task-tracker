import Header from "./components/Header";
import Tasks from "./components/Task"
import {useState} from 'react'

function App() {
	const [tasks, setTasks] = useState([
		{
			id:1,
			text: 'Doctors Appointment',
			day: 'Feb 5th at 2:30pm',
			reminder: true
		},
		{
			id:2,
			text: 'Meeting at School',
			day: 'Feb 6th at 1:30pm',
			reminder: true
		},
		{
			id:3,
			text: 'Food Shooping',
			day: 'Feb 5th at 2:30pm',
			reminder: false
		}
	])
	const deleteTask = (id) =>{
		setTasks(tasks.filter((task)=> task.id !== id ))
	}
	const toggleReminder = (id) =>{
		setTasks(tasks.map((task)=> task.id === id ?{...task, reminder: !task.reminder}:task
		))
	}  

	return (
	<div className="Container">
		{/* <h1>Hello from React</h1> */}
		<Header title="Tracker App"/>
		<Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
	</div>
	);
}


export default App;
