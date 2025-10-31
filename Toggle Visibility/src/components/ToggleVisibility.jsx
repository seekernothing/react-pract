import React, { useState } from "react";
import productsData from "../utils/prodcuts.json";

function ProductList() {
  const [products, setProducts] = useState(productsData);

  const toggleVisibility = (id) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, visible: !p.visible } : p))
    );
  };

  return (
    <div>
      <h2>Visible Products:</h2>
      {products
        .filter((p) => p.visible)
        .map((p) => (
          <div key={p.id}>
            <p>{p.name}</p>
            <button onClick={() => toggleVisibility(p.id)}>Toggle</button>
          </div>
        ))}
    </div>
  );
}

export default ProductList;
