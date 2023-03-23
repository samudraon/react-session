import React, { useState } from 'react';

const ObjectExample = () => {
    const [value, setValue] = useState({
        name: 'Samudra',
        age: 26,
        hobby: 'Badminton'
    })

    const handleShowMe = () => {
        setValue({
            name: 'Karmaker',
            age: 25,
            hobby: 'Programming'
        })
    }

    return (
        <div className='text-center mt-5'>
            <h1>{value.name}</h1>
            <h1>{value.age}</h1>
            <h1>{value.hobby}</h1>
            <button onClick={handleShowMe} className='btn btn-outline'>Show Me</button>
        </div>
    );
};

export default ObjectExample;