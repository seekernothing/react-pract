import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../features/products/productSlice";
import { addToCart } from "../features/cart/cartSlice";

const PRODUCTS = [
  { id: 1, title: "iPhone", price: 800 },
  { id: 2, title: "MacBook", price: 1500 },
  { id: 3, title: "AirPods", price: 200 },
];

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(setProducts(PRODUCTS));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>
            {product.title} - ${product.price}
          </p>
          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
