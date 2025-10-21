
import { useState } from "react";
function App() {

  const[selectedcat,setSelectedcat] = useState("")

  // App.jsx
  const categories = ["Fruits", "Vegetables", "Dairy"];

  const products = [
    { name: "Apple", category: "Fruits" },
    { name: "Banana", category: "Fruits" },
    { name: "Carrot", category: "Vegetables" },
    { name: "Broccoli", category: "Vegetables" },
    { name: "Milk", category: "Dairy" },
    { name: "Cheese", category: "Dairy" },
  ];

  const filteredProducts = products.filter(p=>p.category===selectedcat)

  return (
    <>
      <h1>Category-product filter</h1>

      <div>
        <select
        value={selectedcat}
        onChange={(e)=>setSelectedcat(e.target.value)}
        >
          <option value="">Select a category</option>
          {categories.map((cat,i)=>(
            <option key={i}>{cat}</option>
          ))}
        
        </select>
      </div>


      <div>
        <ul>
          {filteredProducts.map((p,i)=>(
            <li key={i}>{p.name}</li>
          ))}

        </ul>
      </div>
    </>
  );
}

export default App
