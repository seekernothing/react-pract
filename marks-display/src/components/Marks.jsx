import React from 'react'

import list from "../utils/list.json"

const Marks = () => {
  return (
    <div className='container'>
        <h2><b>Student List</b></h2>
 
 <ul className='ul'>
    {list.map((l,idx)=>(
        <li style={{backgroundColor: l.marks<35?"red":"green"}} key={idx}>{`${l.name}--${l.marks}`}</li>
    ))}
 </ul>

    </div>
  )
}

export default Marks