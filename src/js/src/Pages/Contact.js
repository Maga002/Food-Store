import Card from "../UI/Card";
import table from '../assets/images/table.png'
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <section>
      <Card>
        <div className={classes.reserv}>
          <h1>Reserv your table</h1>
          <form>
            <div>
              <input type="name" placeholder="First Name"></input> <br />
              <input type="name" placeholder="Last Name"></input> <br />
              <input type="date"></input>
            </div>
            <div className={classes.tables}>
              <img alt="" src={table} />
              <img alt="" src={table} />
              <br/>
              <img alt="" src={table} />
              <img alt="" src={table} />
              <br/>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>

              </select>
            </div>
          </form>
        </div>

        <div className={classes.contact}>
            <h4>
                Tel:+36 20 1234567
            </h4>
            <h4>
                Email: foodstore@gmail.com
            </h4>
        </div>
      </Card>
    </section>
  );
};
export default Contact;











