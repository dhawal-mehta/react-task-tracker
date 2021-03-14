import {useState} from 'react'

const AddTask = ({onAdd,toggleForm , show}) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)
    
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please add a task')
            return
        }

        onAdd({text, day, reminder})

        setText("")
        setDay("")
        setReminder(false)
    }


    return (
        <>
        <button className="btn btn-block" onClick={toggleForm}>{show?"Hide Form":"Show Form"}</button>
        {show === true ?
        (<form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
 
                <div className="form-control">
                    <label>Task</label>
                    <input type="text" placeholder="Add Task" value={text} onChange={(e)=> setText(e.target.value)}/>
                </div> 

                <div className="form-control">
                    <label>Day & Time</label>
                    <input type="text" placeholder="Add Day & Time" value={day} onChange={(e)=> setDay(e.target.value)}/>
                </div>    
                
                <div className="form-control form-control-check">
                    <label>Reminder</label>
                    <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}/>
                </div>

                <input type="submit" value="Save Task" className="btn btn-block"/>

            </div>
        </form>):
        (
            <div style={{marginBottom: "40px"}}></div>
        )}
        </>
    )
}

export default AddTask
