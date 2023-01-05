import Card from "../UI/Card";
import { useEffect, useState } from "react";
import Loading from "../UI/Loading";
import MenuSingle from "../components/MenuSingle";
import { getAllMenu } from "../Data/client";
import classes from "./Menu.module.css";
const Menu = () => {
  const [isFetched, setIsFetched] = useState(false);
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    setIsFetched(false);
    getAllMenu().then((res) => {
      res.json().then((menu) => {
        setIsFetched(true);
        setMenu(menu);
      });
    });
  }, []);

  const renderAllMenu = () => {
    return (
      <div className={classes.allMenu}>
        <h1>Our Menus</h1>
        {menu.map((m) => {
          return (
            <div key={m.menuID} className={classes.menus}>
              <MenuSingle
                id={m.menuID}
                img={m.menuIMG}
                title={m.menuTitle}
                price={m.menuPrice}
                foodList={m.foodList}
              />
              <hr />
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Card>{isFetched ? renderAllMenu() : <Loading />}</Card>
    </div>
  );
};
export default Menu;
