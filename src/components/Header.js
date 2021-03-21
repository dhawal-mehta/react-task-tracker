import Button from './Button';

const Header = ({title}) => {
    const onClick = () => {
        alert("To Add task in to do List\n1. Click on show form \n2. Fill form values.\n3. Submit form to save entry to the list.");
    }
    return (
        <header className='header'>  
            <h1 >{title}</h1> 
            <Button color="green" text="How To Use" onClick={onClick}/>
        </header>
    )
}


export default Header 
