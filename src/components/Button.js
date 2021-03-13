
const Button = ({text, color, onClick}) => {
    // const onClick= () => {
    //     alert("lol");
    // }


    return (
        <>
            <button onClick={onClick} className='btn' style={{backgroundColor: color }}>{text}</button>
        </>
    )
}

export default Button
