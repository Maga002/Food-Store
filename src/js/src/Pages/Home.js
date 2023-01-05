import Container from "../UI/Container";
import photo1 from "../assets/images/res1.png";
import photo2 from "../assets/images/res2.png";
import spon1 from "../assets/images/spon1.png";
import spon2 from "../assets/images/spon2.png";
import spon3 from "../assets/images/spon3.png";
import spon4 from "../assets/images/spon4.png";

import classes from "../Pages/Home.module.css";
import { Link  } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Container>
        <div className={classes.homeCard}>
          <section className={classes.home}>
            <div className={classes.homeDesc}>
              <h1>SERVED EVERY DAY SINCE 1990</h1>
              <p>
                Bubby’s opened on Thanksgiving Day 1990. Chef / Owner Ron Silver
                began baking pies and selling them to restaurants and his
                neighbors out of a small kitchen at the corner of Hudson and
                North Moore St. in Tribeca. Today, NYC’s beloved restaurant and
                pie shop celebrates 27 years of classic, made from scratch
                American cooking.
                <br />
                <br />

                Just a short walk from London’s best museums and the shops of
                Knightsbridge and Chelsea, CERU South Ken is now serving our
                Seasonal menu alongside a curated handpicked wine list,
                delicious cocktails and more. We look forward to welcoming you
                for lunch, dinner or weekend brunch. 
                <br/>
              </p>
              <h5>7–9 Bute Street, London SW7
                3EY E • southken@cerurestaurants.com T • 020 3195 3001</h5>
                <Link to="address">Our Addresses {"  ->"}</Link>
              
            </div>
            <div className={classes.rightImg}>
            <img alt="" src={photo1}/>
            <img alt="" src={photo2}/>

            </div>
          </section>
          <div className={classes.homeimg}>
              <img alt="" src={spon1} />
              <img alt="" src={spon2} />
              <img alt="" src={spon3} />
              <img alt="" src={spon4} />

            </div>  
     
          <div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
