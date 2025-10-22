import { useState } from "react";

function App() {

  const[selected,setSelected] = useState("")

  console.log(selected)

  let products = [
    { name: "Laptop", price: 500 },
    { name: "Mobile", price: 1000 },
    { name: "Headphones", price: 300 },
    { name: "Smartwatch", price: 2000 },
    { name: "Tablet", price: 1500 },
  ];

   
  let filterdProducts = [...products].sort((a,b)=>
  selected==="asc"?a.price-b.price:b.price-a.price
  )


 

  return (
    <>
      <div className="container">
        <h1>Sort product by price</h1>

        {/* div to select sorting */}

        <div>
          <select className="selected"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="asc">Low to High</option>
            <option value="dec">High to Low</option>
          </select>
        </div>

        {/* div to disply products */}

        <ul className="ul">
          
          {filterdProducts.map((p,i)=>(
            <li className="li" key={i} >{`${p.name} - ${p.price}`}</li>
          ))}

        </ul>
      </div>
    </>
  );
}

export default App
