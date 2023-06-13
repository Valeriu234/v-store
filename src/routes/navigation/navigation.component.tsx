import { Outlet } from "react-router-dom";

import NavigationItemComponent from "./navigation-item.component.tsx";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
// import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";

import "./navigation.styles.scss";
import { ROUTES } from "../routes.constants.ts";

const NavigationComponent = () => {
  const navLinks = [
    {
      route: ROUTES.SHOP,
      content: <span>SHOP</span>,
    },
    {
      route: ROUTES.CONTACTS,
      content: <span>CONTACT</span>,
    },
    {
      route: ROUTES.SIGN_IN,
      content: <span>SIGN IN</span>,
    },
    {
      route: ROUTES.SHOPPING_CART,
      content: <CrwnLogo />,
    },
  ];
  return (
    <>
      <div className="navigation">
        <NavigationItemComponent route={ROUTES.HOME}>
          <CrwnLogo />
        </NavigationItemComponent>

        <div className="nav-links-container">
          {navLinks.map(({ route, content }) => (
            <NavigationItemComponent route={route}>
              {content}
            </NavigationItemComponent>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationComponent;
