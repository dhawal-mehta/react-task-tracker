import Button from './Button';

const Header = ({title}) => {
    const onClick = () => {
        alert("This is a Todo App. \n Click on show Form \n then fill form and save entry to ToDo list.  ");
    }
    return (
        <header className='header'>  
            <h1 >{title}</h1> 
            <Button color="green" text="About" onClick={onClick}/>
        </header>
    )
}


export default Header 
