import classes from "../Pages/Menu.module.css";
const MenuSingle = (props) => {
  const { id, title, img, price, foodList } = props;
  return (
    <div className={classes.allSingle}>
      <h3>{title}</h3>

      <div className={classes.singleMenu}>
        <img src={img} alt="" />
        <ul>
          {foodList.map((f) => {
            return <li>{f}</li>;
          })}
        </ul>
      </div>
          <button>Order Now</button>
    </div>
  );
};

export default MenuSingle;
