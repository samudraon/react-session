import React, { useState } from 'react';
import { guns } from '../../../test';

const ArrayExample = () => {
    const [data, setData] = useState(guns)
    // console.log(data);
    const handleRemove = () => {
        setData([])
    }

    const handleSingleRemove = (id) => {
        /* option - 1 */
        // const filterData = data.filter(d => d.id !== id);
        
        /* option - 2 */
        setData(data.filter(d => d.id !== id));
    };

    return (
        <div className='text-3xl text-center font-bold my-4'>
            {
                data && data.map(singleData => (
                    <div>
                        <p>{singleData.name}</p>
                        <button onClick={()=>handleSingleRemove(singleData.id)} className='btn btn-error mt-4'>Remove</button>
                    </div>
                ))
            }
            <div>
                <button onClick={handleRemove} className='btn btn-active mt-4'>Remove All</button>
            </div>
        </div>

    );
};

export default ArrayExample;