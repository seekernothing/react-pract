import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{display:"flex"}}>
      
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default App;
