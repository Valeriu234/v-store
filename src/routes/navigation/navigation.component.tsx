import { Outlet } from "react-router-dom";

import NavigationItemComponent from "./navigation-item.component.tsx";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";
import { ReactComponent as BurgerMenu } from "../../assets/burger-menu.svg";

import { ROUTES } from "../routes.constants.ts";
import "./navigation.styles.scss";

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
			content: <ShoppingCart />,
		},
	];
	return (
		<>
			<div className="navigation">
				<NavigationItemComponent route={ROUTES.HOME}>
					<CrwnLogo />
				</NavigationItemComponent>

				<div className="navigation__links">
					{navLinks.map(({ route, content }, index) => (
						<NavigationItemComponent key={index} route={route}>
							{content}
						</NavigationItemComponent>
					))}
				</div>
				<BurgerMenu className="navigation__burger-icon" />
			</div>
			<Outlet />
		</>
	);
};

export default NavigationComponent;
