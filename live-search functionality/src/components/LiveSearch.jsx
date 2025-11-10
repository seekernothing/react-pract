import React, { useState } from "react";

const LiveSearch = () => {
  const [inp, setInp] = useState("");

  const products = [
    { name: "Laptop", price: 500 },
    { name: "Mobile", price: 1000 },
    { name: "Headphones", price: 300 },
    { name: "Smartwatch", price: 2000 },
    { name: "Tablet", price: 1500 },
  ];

  const filteredProducts = products.filter((p)=>p.name.toLowerCase().includes(inp.toLowerCase()))

  return (
    <div>
      <h2>LiveSearch</h2>

      <div className="input">
        <input
          type="text"
          placeholder="Find your product"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
        />
      </div>

      <div className="list">
        <ul className="ul">
          {filteredProducts.map((p, idx) => (
            <li key={idx}>
              {" "}
              {p.name} <span>{p.price} </span>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LiveSearch;
