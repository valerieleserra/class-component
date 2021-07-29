import { useState } from 'react'

function HomeFunction(){
    const [counter, setCounter] = useState(0)
    return(
        
        <div style={{padding: '20px'}}>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        &nbsp;
        <button onClick={() => setCounter(counter - 1)}>-</button>
        </div>
        )
    }

export default HomeFunction