import classes from "../Pages/FoodList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store";

const FoodSingle = (props) => {
  const { id, title, ingredients, price, image } = props;
  const dispatch = useDispatch();
  
  const addToCart = () => {
    dispatch(
      cartActions.addToCart({
        id,
        title,
        price,
      })
    );
  };

  const sliceIngredient = (array) => {
    const joined = array.join(", ");
    let cover = joined.slice(0, 28);
    if (joined.length >= 28) {
      const showMore = "...";
      return cover.concat(showMore);
    } else {
      return cover;
    }
  };

  return (
    <div key={id} className={classes.singleFood}>
      <div className={classes.foodTitle}>
        <img src={image} alt="" />
        <div>
          <h2>{title}.</h2>
          <span title={ingredients.join(", ")}>
            Ingredients: {sliceIngredient(ingredients)}
          </span>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default FoodSingle;
