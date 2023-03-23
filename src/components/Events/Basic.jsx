import React, { useEffect, useState } from 'react';

const Basic = () => {

    const [value, setValue] = useState(0);
    console.log(value, setValue);

    const handleCount = () => {
        setValue(value + 1);
    };
    useEffect(() => {
        console.log('Hello')
    }, [])


    return (
        <div className='text-center text-3xl mt-6 font-semibold'>
            <h1>Count: {value}</h1>
            <button onClick={handleCount} className='btn btn-primary mr-2'>Plus</button>
            <button className='btn'>Plus</button>
        </div>
    );
};

export default Basic;