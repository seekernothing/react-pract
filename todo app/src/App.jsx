
import { useState } from "react"

function App() {

  const[input,setInput]= useState("")
  const[tasks,setTasks] = useState([])

  
  

  function add(){

    if(input.trim()==="") return
    setTasks([...tasks,input])
    setInput("")

  }

  function deletefn(i){

    const newTasks = tasks.filter((_, inx)=> inx!==i)
    setTasks(newTasks)

  }



  return (
    <>
      <h1>Todo App</h1>


      <div>

        <input
        value={input}
        type="text"
        placeholder="Enter your task"
        onChange={(e)=>setInput(e.target.value)}
        />

        <button onClick={add}>Add</button>
      </div>

      <div>
        <ul>
        {tasks.map((t,i)=>(
          <li key={i}>{t}
          
          <button onClick={()=>deletefn(i)}>Delete</button>
          </li>
        ))}
        </ul>
      </div>
    </>
  )
}

export default App


