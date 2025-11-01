import React from 'react'

import list from "../utils/list.json"

const Marks = () => {
  return (
    <div>
        <h2><b>Student List</b></h2>
 
 <ul>
    {list.map((l,idx)=>(
        <li key={idx}>{`${l.name}--${l.marks}`}</li>
    ))}
 </ul>

    </div>
  )
}

export default Marks