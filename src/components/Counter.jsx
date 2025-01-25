import {useState} from 'react'
function Counter () {
    const [count, setCount]= useState(0)
    const [name, setName]= useState("")
    const [isStudent, setIsStudent] = useState(false)

    const buttonClick = () =>{
        setCount(count +1)
        setName("Liolio")
    }
    const studentClick = () =>{
        setIsStudent(!isStudent)
    }
    return (
        <>
        <p>Name: {name}</p>
        <button onClick={buttonClick}>Clicker Button</button>
        <p>Count + {count}</p>
        <hr />
        <p>{isStudent ?"Yes":"No"}</p>
        <button onClick={studentClick} className='student-button'>Are you a student? </button>

        
        </>
    );

}
export default Counter;