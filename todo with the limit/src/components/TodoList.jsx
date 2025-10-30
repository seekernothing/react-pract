
import { useState } from 'react'

import React from 'react'

const TodoList = () => {


    const[input,setInput] = useState("")
   



  return (
    <>
      <div className="input-section">
        <input
          type="input"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className='product display'>


        <button onClick={handelAdd}>Add</button>


<ul>

</ul>

      </div>
    </>
  );
}

export default TodoList