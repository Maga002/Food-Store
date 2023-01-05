import { Fragment } from "react";
import classes from "./NavBar.module.css";
import logo from "../assets/images/logo.png";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";
import CartModal from "./CartModal";
import { useSelector } from "react-redux";

const NavBar = () => {
  const showModal = useSelector((state) => state.modal.showModal);
  return (
    <Fragment>
      <section>
        <div className={classes.navbarBack}>
          <div className={classes.navbarAll}>
            <div className={classes.navbarLogo}>
              <h1>
                <NavLink to="/">FoodStore</NavLink>
              </h1>
              <img src={logo} alt="Logo Food" />
            </div>
            <div className={classes.navbarList}>
              <ul>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? { borderBottom: "3px solid gold" }
                      : { borderBottom: "3px solid transparent" }
                  }
                  end
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? { borderBottom: "3px solid gold" }
                      : { borderBottom: "3px solid transparent" }
                  }
                  to="foodlist"
                >
                  Food List
                </NavLink>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? { borderBottom: "3px solid gold" }
                      : { borderBottom: "3px solid transparent" }
                  }
                  to="Menu"
                >
                  Our Menus
                </NavLink>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? { borderBottom: "3px solid gold" }
                      : { borderBottom: "3px solid transparent" }
                  }
                  to="Address"
                >
                  Address
                </NavLink>
                <NavLink
                  style={({ isActive }) =>
                    isActive
                      ? { borderBottom: "gold" }
                      : { borderBottom: "3px solid transparent" }
                  }
                  to="contact"
                >
                  Contact
                </NavLink>
                <li>
                  <Cart />
                </li>
              </ul>
              <div className="card"></div>
            </div>
          </div>
        </div>
        {showModal ? <CartModal/> : undefined}
      </section>
    </Fragment>
  );
};

export default NavBar;
