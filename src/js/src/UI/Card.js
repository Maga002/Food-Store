import classes from "./Card.module.css";


const Card = (props) => {

  return (
    <section className="fullcard">
      <div className={classes.card}>{props.children}</div>;
    </section>
  );
};
export default Card;
