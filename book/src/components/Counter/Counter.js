import React, { useState } from 'react';    

const Counter = function () {
    const [count, setCount] = useState(0);

    function Increm() {
        setCount(count + 1)
    }
    function Discrem() {
        setCount(count - 1)
    }

    return (
        <div style={{ textAlign: 'center', margin: '50px auto' }}>
            <h1>{count}</h1>
            <button onClick={Increm} style={{ fontSize: '2vw', height: '3vw' }}>+</button>
            <button onClick={Discrem} style={{ fontSize: '2vw', height: '3vw' }}>-</button>
        </div>
    )
}

export default Counter;