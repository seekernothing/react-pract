import React, { useEffect } from "react";
import {
  setProducts,
  setCategories,
  toggleCategory,
  sortedByAscending,
  sortedItemsByDescending,
} from "./productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();

  const { sortedItems, categories, selectedCategories } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      dispatch(setProducts(data.products));

      // Extract unique categories dynamically
      const uniqueCats = [...new Set(data.products.map((p) => p.category))];

      dispatch(setCategories(uniqueCats));
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product Filter + Sort</h2>

      {/* Category Checkboxes */}
      <div style={{ marginBottom: "10px" }}>
        {categories.map((cat) => (
          <label key={cat} style={{ marginRight: "15px" }}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat)}
              onChange={() => dispatch(toggleCategory(cat))}
            />
            {cat}
          </label>
        ))}
      </div>

      {/* Sorting */}
      <div style={{ marginBottom: "10px" }}>
        <select
          onChange={(e) => {
            if (e.target.value === "asc") dispatch(sortedByAscending());
            if (e.target.value === "dec") dispatch(sortedItemsByDescending());
          }}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low → High</option>
          <option value="dec">High → Low</option>
        </select>
      </div>

      {/* Display List */}
      <ul>
        {sortedItems.map((prod) => (
          <li key={prod.id}>{`${prod.title} — $${prod.price}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
