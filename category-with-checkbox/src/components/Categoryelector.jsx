import React, { useState } from "react";

const Categoryelector = () => {
  const [checked, setChecked] = useState([]);

  const categories = ["Fruits", "Vegetables", "Dairy"];

  const products = [
    { name: "Apple", category: "Fruits" },
    { name: "Banana", category: "Fruits" },
    { name: "Carrot", category: "Vegetables" },
    { name: "Broccoli", category: "Vegetables" },
    { name: "Milk", category: "Dairy" },
    { name: "Cheese", category: "Dairy" },
  ];

  // function to handel onchange
  const handelChange = (cat) => {
    if (checked.includes(cat)) {
      setChecked(checked.filter((c) => c !== cat));
    } else {
      setChecked([...checked, cat]);
    }
  };

  const filtered =
    checked.length === 0
      ? products
      : products.filter((prod) => checked.includes(prod.category));

  // console.log(filtered);

  return (
    <div>
      <div>
        {/* checkboxes */}

        {categories.map((cat) => (
          <label key={cat}>
            <input
              type="checkbox"
              checked={checked.includes(cat)}
              onChange={() => handelChange(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      <div>
        {/* list */}

        <ul>
          {filtered.map((prod, idx) => (
            <li key={idx}>{prod.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categoryelector;
