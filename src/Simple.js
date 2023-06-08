import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Simple  () {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1);
    };
    
    // State available even in this simple component?
    console.log(useSelector((state) => state.counter.value));

    const style = {
        marginTop: '20px',
        padding: '20px',
        border: 'solid 3px #000',
    };

    return (
        <div style={style}>
            <h2>Simple Component</h2>
            <button onClick={increment}>
                Click!
            </button>
            <p>
                Counter: {counter}  
            </p>    
            
        </div>
    );
}