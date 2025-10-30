
import { useState } from 'react'

import React from 'react'

const TodoList = () => {


    const[input,setInput] = useState("")
   
    const[list,setList] = useState([])

   let limit = 5

   

function handelAdd(){


     if (list.length >= limit) {
       Error(`You can add at most ${limit} todos.`);
     }


   if (input.trim() !== "") {
     setList([...list, input]);
   }
   setInput("");
}

function handelDelete(i){
    let newList = list.filter((l,idx)=>idx!==i)
    setList(newList)
}



  return (
    <>
      <div className="input-section">
        <input
          type="input"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button 
        disabled={list.length>=limit}
        onClick={handelAdd}>Add</button>
      </div>

      <div className="product display">
        <ul className='ul'>
          {list.map((l, i) => (
            <li key={i}> {l}
            <button onClick={()=>handelDelete(i)}>Delete</button>
            </li>
          ))}
        </ul>

        <p>{list.length}/{limit}</p>
      </div>
    </>
  );
}

export default TodoList