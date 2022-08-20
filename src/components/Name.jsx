import { useState } from 'react';

export default function () {
    
    const [name, setName] = useState('name');

    const handleInput = (e) => setName(e.target.value);

    return (
        <div>
            <h4 className='text-white'>{name}</h4>
             
            <input type="text" placeholder='edit me' className='border-2 border-black' onChange={handleInput} />
        </div>
    );
}
