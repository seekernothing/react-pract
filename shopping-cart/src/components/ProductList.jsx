import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/productsSlice";
import { addToCart } from "../features/cartSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        dispatch(setProducts(data.products)); // pass to slice
      } catch (err) {
        console.log("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "10px" }}>
          <p>{p.title}</p>
          <p>₹{p.price}</p>
          <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
