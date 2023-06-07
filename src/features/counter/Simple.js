import React, { useState } from 'react';

export default function Simple  () {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(prevCounter => prevCounter + 1);
    };  

    const style = {
        marginTop: '20px'
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