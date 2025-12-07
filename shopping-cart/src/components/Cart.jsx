import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 && <p>No items in cart.</p>}

      {items.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          <p>
            {item.title} (x{item.quantity})
          </p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
