import React from 'react'
import product from '../utils/prodcuts.json'
import { useState } from 'react'

const ToggleVisibility = () => {

    const[products,setProducts] = useState(product)
    const visibleProducts = products.filter((p)=>p.visible===true)
    console.log(visibleProducts)

    const handelToggle = (pid)=>{
        let toggle = 
    }

  return (
    <div>
        <h2>Prodcts</h2>
      <ul className='li'>

        {visibleProducts.map((p)=>(
            <li key={p.id}>{p.name}
            <button onClick={()=>handelToggle(p.id)}>ToggleVisibility</button>
            </li>
        ))}
       
      </ul>
    </div>
  );
}

export default ToggleVisibility