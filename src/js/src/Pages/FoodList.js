import classes from "./FoodList.module.css";
import { useEffect, useState } from "react";
import { getAllFood } from "../Data/client";
import Card from "../UI/Card";
import Loading from "../UI/Loading";
import FoodSingle from "../components/FoodSingle";

const FoodList = () => {
  useEffect(() => {
    setIsFetched(false);
    getAllFood().then((res) => {
      res.json().then((food) => {
        setFood(food);
        setIsFetched(true);
      });
    });
  }, []);

  const [food, setFood] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const renderAllFood = () => {
    return (
      <div className={classes.foodList}>
        <h1>Our Foods</h1>
        {food.map((item) => {
          return (
            <FoodSingle
              key={item.foodID}
              id={item.foodID}
              title={item.title}
              ingredients={item.ingredients}
              price={item.price}
              image={item.imageURL}
            />
          );
        })}
      </div>
    );
  };

  return (
    <Card>
      <div className={classes.foodListAll}>
        {!isFetched ? <Loading /> : renderAllFood()}
      </div>
    </Card>
  );
};

export default FoodList;
