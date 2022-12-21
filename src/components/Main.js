import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { productList } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state);
  console.log("data from main component", data);
  const product = {
    name: "i phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <div>
        <button onClick={() => dispatch(removeFromCart(product))}>
          Remove from Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart(product))}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList(product))}>
          Call Product function
        </button>
      </div>
    </div>
  );
}

export default Main;
