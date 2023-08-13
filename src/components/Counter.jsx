import React ,{Component, useState} from 'react'

function Counter() {
    let [count, setCount] = useState(0);

    let incrementCounter = () => {
        setCount(count+1);
        console.log("Increment" + count);
    }
    let decrementCounter = () => {
        setCount(count-1);
        console.log("decrement" + count);
    }


  return (
    <>
        <button onClick={incrementCounter}>+</button>
        <p>{count}</p>
        <button onClick={decrementCounter}>-</button>
    </>
        

    )
}

export default Counter