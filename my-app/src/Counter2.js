import { useState } from "react"

const Counter2 = () => {
    const [count, setCount] = useState(0);
     const handleClickMe = () => {
        setCount(count + 1);
     }
    return (
        <>
            <div>
                <p> Counter 2</p>
                <p> You clicked{count} times</p>
                <button onClick={handleClickMe}>Click me</button>
            </div>
        </>
    )
}
export default Counter2;