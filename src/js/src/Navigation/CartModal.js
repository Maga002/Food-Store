import classes from "./CartModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store";
import CartModalSingle from "./CartModalSingle";
const CartModal = () => {
  const dispatch = useDispatch();
  const ctx = useSelector((state) => state.cart);
  const foodLength = ctx.cartFoods.length;
  const toggleModal = () => {
    dispatch(modalActions.toggleModal());
  };
  return (
    <div className={classes.cartModal}>
      {foodLength ? <div className={classes.cartList}>
      <h2>My cart</h2>
        <ul>
          {ctx.cartFoods.map((item) => (
            <CartModalSingle key={item.id} food={item} />
          ))}
        </ul>

        <h4>Total: ${ctx.totalAmount}</h4>
        <div className={classes.buttons}>
          <button>Order</button>
          <button onClick={toggleModal}> Close</button>
        </div>
      </div> : <h2 className={classes.empty}>Your cart is empty</h2> }
      
    </div>
  );
};

export default CartModal;
