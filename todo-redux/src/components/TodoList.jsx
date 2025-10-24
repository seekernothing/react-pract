
import React from 'react'
import { useState } from 'react'

const TodoList = () => {

    const[input,setInput] = useState("")


  return (
    <div className='container'>

        {/* input div */}

        <div className='innput'>

            <input
            type='text'
            placeholder='Enter the task'
            name='todo'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />

            <button>Add</button>

        </div>
    </div>
  )
}

export default TodoList