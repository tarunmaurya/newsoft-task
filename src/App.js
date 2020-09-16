import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar'

const App = () => {
    const [value, setValue] = useState(0);

    useEffect( () => {
        const interval = setInterval( () => {
            setValue( (oldValue) =>{
                const newValue = oldValue + 10;

                if(newValue === 100){
                    clearInterval(interval);
                }

                return newValue;
            })
        }, 3000)
    }, []);
    return(
        <>
        <ProgressBar value={value} max={100} />
        </>
    );
};

export default App;