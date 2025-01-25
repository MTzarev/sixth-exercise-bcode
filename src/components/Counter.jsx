import {useState} from 'react'
function Counter () {
    const [count, setCount]= useState(0)
    const [name, setName]= useState("")
    const [isStudent, setIsStudent] = useState(false)


    const buttonClick = () =>{
        setCount(count +1)
        setName("Liolio")
    }
   
    const decrement = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount (0)
    }
    const increment = () => {
        setCount(count+1)
    }
    const studentInfo = () => {
        setIsStudent(!isStudent)
    }
    return (
        <>
        <p>Name: {name}</p>
        <button onClick={buttonClick}>Clicker Button</button>
        <p>Count + {count}</p>
        <hr />
       
        <p>{count}</p>
            <div>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
        </div>
        <hr />
        <p>{isStudent?"Yes":"No"}</p>
        <button onClick={studentInfo}>Student Info</button>
        </>
    );

}
export default Counter;