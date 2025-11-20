import React, { useEffect } from "react";
import {
  setProducts,
  sortedByAscending,
  sortedItemsByDescending,
} from "./productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();
  const { sortedItems } = useSelector((state) => state.product);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      dispatch( setProducts(data.products));
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div>
        {/* select */}

        <select
          onChange={(e) => {
            if (e.target.value === "asc") dispatch( sortedByAscending());
            if (e.target.value === "dec")
              dispatch( sortedItemsByDescending());
          }}
        >
          <option value="">price range</option>

          <option value="asc">Ascending</option>

          <option value="dec">Descending</option>
        </select>
      </div>

      <div>
        {/* display list */}

        <ul>
          {sortedItems.map((prod) => (
            <li key={prod.id}>{`${prod.title}--- $${prod.price}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
