import { useState } from "react";
import { Outlet } from "react-router-dom";

import NavigationItemComponent from "./navigation-item.component.tsx";
import MenuComponent from "./menu/menu.component.tsx";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { ReactComponent as BurgerMenu } from "../../assets/burger-menu.svg";

import { ROUTES } from "../routes.constants.ts";
import "./navigation.styles.scss";

const NavigationComponent = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMobileMenuClick = () => {
		setIsMenuOpen(true);
	};

	return (
		<>
			<div className="navigation">
				<NavigationItemComponent route={ROUTES.HOME}>
					<CrwnLogo />
				</NavigationItemComponent>
				<MenuComponent />
				<BurgerMenu
					onClick={handleMobileMenuClick}
					className="navigation__burger-icon"
				/>
				{isMenuOpen && (
					<MenuComponent
						setIsMobileMenuOpen={setIsMenuOpen}
						isMobileMenuOpen={isMenuOpen}
						className="burger-menu"
					/>
				)}
			</div>
			<Outlet />
		</>
	);
};

export default NavigationComponent;
