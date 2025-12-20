import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Cart</h2>

      {cart.items.map((item) => (
        <div className="citem" key={item.id}>
          <p>{item.title}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ${item.totalPrice}</p>
        </div>
      ))}

      <h3>Grand Total: ${cart.totalAmount}</h3>
    </div>
  );
}

export default Cart;
