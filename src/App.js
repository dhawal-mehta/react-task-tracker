import Header from "./components/Header";
import Tasks from "./components/Task"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import About from "./components/About"
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'



function App() {
	const [tasks, setTasks] = useState([])
	const [show, setShow] = useState(false)

	// const dbURL = "https://604e6e392a808e0017784ecd.mockapi.io/tasks"
	const dbURL = "http://localhost:5000/tasks"

	useEffect(()=> {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks()
			setTasks(tasksFromServer)
		}

		getTasks()
	}, [])

	//Fetch Tasks
	const fetchTasks = async () => {
		const res = await fetch(dbURL)
		const data = await res.json()
		return data
	}

	const toggleForm = ()=>{
		setShow(show?false:true)
	}


	const deleteTask = async (id) => {
		await fetch(`${dbURL}/${id}`,{method: 'DELETE'})
		setTasks(tasks.filter((task)=> task.id !== id ))
	}

	
 	const toggleReminder = async (id) =>{
		const task = await fetch(`${dbURL}/${id}`)
		const data = await task.json()

		const updatedTask = {...data, reminder: !data.reminder}

		const res = await fetch(`${dbURL}/${id}`,
		    {method: 'PUT',
			headers:{
				'Content-type': 'application/json'
			},
			body: JSON.stringify(updatedTask)
		})

		const newdata = await res.json()
		// console.log(newdata)
		setTasks(tasks.map((task) => task.id === id ?{...task, reminder: newdata.reminder}:task ))
	}  

	const addTask= async (task) => {
		const res = await fetch(`${dbURL}`,
		{method: 'POST',
		headers:{
			'Content-type': 'application/json'
		},
		body: JSON.stringify(task)
		})

		const data = await res.json()
		console.log("data is",data )

		setTasks([...tasks, data])


	}

	return (
	<Router>
		<div className="container">
			{/* <h1>Hello from React</h1> */}
			<Header title="Tracker App"/>
			
			<Route path='/' exact render={(props) =>( 
				<>
					<AddTask onAdd={addTask} show={show} toggleForm={toggleForm}/>
					<Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
				</>
			)} />
			<Route path='/about' component={About} />

			<Footer />
		</div>
	</Router>

	);
}


export default App;
 