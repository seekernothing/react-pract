
import React from 'react'
import { useState } from 'react'
import { addTodo } from '../store/slice/todoSlice'
import { useDispatch } from 'react-redux'

const TodoList = () => {

    const[input,setInput] = useState("")
     const dispatch = useDispatch()


    function handelAddtodo(){
       if(input.trim()!==""){
         dispatch(addTodo(input));
       }

       setInput("")
    }



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

            <button onClick={handelAddtodo}>Add</button>

        </div>
    </div>
  )
}

export default TodoList