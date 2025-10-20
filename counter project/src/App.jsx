import { useState } from "react"


const Counter = ()=>{

   const style = { textAlign: "center",marginTop:"20px" };

  const [count,setCount] = useState(0)

  //console.log(count)

  return(
    <div style={style}>

      <h3>Counter app</h3>

      <h1>{count}</h1>

      <button 
      style={{backgroundColor:"black",color:"White",cursor:"pointer",padding:"2px 2px"}}
      onClick={()=>setCount(count+1)}>Increment</button>


    </div>
  )

}

export default Counter