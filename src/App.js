import Header from "./components/Header";
import Tasks from "./components/Task"
import AddTask from "./components/AddTask"
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

	const [show, setShow] = useState(false)

	const toggleForm = ()=>{
		console.log(show, !show)
		setShow(show?false:true)
	}


	const deleteTask = (id) =>{
		setTasks(tasks.filter((task)=> task.id !== id ))
	}
	const toggleReminder = (id) =>{
		setTasks(tasks.map((task)=> task.id === id ?{...task, reminder: !task.reminder}:task
		))
	}  

	const addTask= (task) => {
		const id = Math.floor(Math.random()*10000) +1
		const newTask = {id, ...task}
		setTasks([...tasks, newTask])

	}

	return (
	<div className="container">
		{/* <h1>Hello from React</h1> */}
		<Header title="Tracker App"/>
		<AddTask onAdd={addTask} show={show} toggleForm={toggleForm}/>
		<Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
	</div>
	);
}


export default App;
 