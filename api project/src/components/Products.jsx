import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>

      {products.map((p) => (
        <div className="productdisplay" key={p.id}>
          <h3>{`${p.title} -- $${p.price}`}</h3>
          <p>{p.description}</p>
        </div>
      ))}

    </div>
  );
};

export default Products;
