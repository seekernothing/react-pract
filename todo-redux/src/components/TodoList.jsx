
import React from 'react'
import { useState } from 'react'
import { addTodo, deleteTodo } from '../store/slice/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const TodoList = () => {

    const[input,setInput] = useState("")
     const dispatch = useDispatch()
     const{todoList} = useSelector(state=>state.todo)
     console.log(todoList)

    
     
     //add todo
    function handelAddtodo(){
       if(input.trim()!==""){
         dispatch(addTodo(input));
       }

       setInput("")
    }

    // delete todo

    function handelDelete(id){
      dispatch(deleteTodo(id))

    }


  return (
    <div className="container">
      {/* input div */}

      <div className="innput">
        <input
          type="text"
          placeholder="Enter the task"
          name="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handelAddtodo}>Add</button>
      </div>

      <div className="ul">
        {todoList && todoList.length > 0
          ? todoList.map((t) => (
              <li key={t.id}>

                <p>{t.title}</p>

                 <button onClick={()=>handelDelete(t.id)}>Delete</button>


              </li>
            ))
          : null}
      </div>
    </div>
  );
}
export default TodoList