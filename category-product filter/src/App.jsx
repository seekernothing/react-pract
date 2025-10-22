
import { useState } from "react";
function App() {

  let style1 = {textAlign : "center"}
  let style2 = {listStyleType:"none"}

  const [selected, setSelected] = useState("")

const categories = ["Fruits", "Vegetables", "Dairy"];

const products = [
  { name: "Apple", category: "Fruits" },
  { name: "Banana", category: "Fruits" },
  { name: "Carrot", category: "Vegetables" },
  { name: "Broccoli", category: "Vegetables" },
  { name: "Milk", category: "Dairy" },
  { name: "Cheese", category: "Dairy" },
];

 
  

  let filteredProducts = products.filter((p) => p.category === selected);
  
console.log(filteredProducts);

 

  

  return (
    <>

    {/* container div */}
      <div className="container" style={style1}>
        <h1> category-product filter</h1>

         {/* category selection div */}
        <div className="product-filter">

          <select
          value={selected}
          onChange={(e)=>setSelected(e.target.value)}
          >

            <option value=""   >Select category</option>

            {categories.map((cat)=>(
              <option value={cat}>{cat}</option>
            ))}

          </select>

        </div >
            
            {/* product display div */}

            <ul style={style2}>
              {selected!==""
              ? filteredProducts.map((p,i)=>(
                <li key={i} >{p.name}</li>
              )):
              products.map((p,i)=>(
               <li key={i}>{p.name}</li>
              ))
              }
            </ul>

      </div>
    </>
  );
}

export default App



