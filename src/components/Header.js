import Button from './Button';

const Header = ({title}) => {
    const onClick = () => {
        alert("To Add task in to do List\n1. Click on show form \n2. Save entry to tracker list   ");
    }
    return (
        <header className='header'>  
            <h1 >{title}</h1> 
            <Button color="green" text="About" onClick={onClick}/>
        </header>
    )
}


export default Header 
