import React, { useState } from 'react';
import {findPrime} from "../utils/helper"

const Demo = () => {
    const [text, setText] = useState(0);

    const prime = findPrime(text);
  return (
    <div className='m-2 p-2 w-96 h-96 border border-black'>
        <div >
            <input className='border border-black w-72 px-2' type='number' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div>
            <h1>nth prime: {prime}</h1>
        </div>
    </div>
  )
}

export default Demo