import classes from './CartModal.module.css'
import { cartActions } from '../store';
import { useDispatch } from 'react-redux';



const CartModalSingle = (props) =>{
   
    const dispatch = useDispatch()

    const increaseItem = () =>{
        const id = props.food.id
        dispatch(cartActions.addMore({
            id
        }))
    }

    const decreaseItem = () =>{
        const {id} = props.food
        
        dispatch(cartActions.removeFood({
            id
        }))
    }

    return (
        <li key={props.food.id}>
          <span>
            - {props.food.title}{" "}
            <div className={classes.cartButtons}>
              <button onClick={()=>decreaseItem()}>-</button>
              <h3>{props.food.quantity}</h3>
              <button onClick={()=>increaseItem()} >+</button>
            </div>
          </span>
          <h4>${props.food.totalPrice}</h4>
        </li>
      );
}
export default CartModalSingle