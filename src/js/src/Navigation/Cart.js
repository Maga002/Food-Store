import { Fragment } from "react"
import basket from '../assets/images/basket.png'
import classes from './Cart.module.css'
import { useDispatch } from "react-redux";
import { modalActions } from "../store"; 
import { useSelector } from "react-redux";



const Cart = () =>{
 const count = useSelector(state => state.cart.count)
const dispatch = useDispatch()
const showModalHandler = () =>{
  dispatch(modalActions.toggleModal())
}


return(
    <Fragment>
        <div>
            <h5 onClick={showModalHandler} className={classes.cartComp}>
                <img src={basket} alt="basket"/>
                My Cart <span className="badge">{count}</span>
            </h5>

        </div>
    </Fragment>
)
}
export default Cart