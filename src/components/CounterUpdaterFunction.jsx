import { useState } from "react"
function CounterUpdaterFunction () {
const [count, setCount] = useState(0);

const increment = ()=>{
    setCount(c=>c+1);
    setCount(c=>c+1);
    setCount(c=>c+1);
}
const reset = () => {
    setCount(0)
}
const decrement = ()=>{
    setCount(c=>c-1);
    setCount(c=>c-1);

}

    return(
        <>
        <p>Count: {count}</p>
        <label htmlFor="">
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>

        </label>
        </>
    )
}
export default CounterUpdaterFunction