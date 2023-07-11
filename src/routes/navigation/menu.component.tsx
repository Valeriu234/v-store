import React, { useContext, useState } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils.js";

import NavigationItemComponent from "./navigation-item.component.tsx";
import PopupComponent from "../../components/popup/popup.component.tsx";
import ButtonComponent from "../../components/button/button.component.tsx";
import { UserContext } from "../../contexts/user.context.tsx";

import { ROUTES } from "../routes.constants.ts";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";

interface MenuComponentProps {
	className?: string;
	isMobileMenuOpen?: boolean;
	setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
const MenuComponent = ({
	className = "navigation__links",
	isMobileMenuOpen,
	setIsMobileMenuOpen,
}: MenuComponentProps) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const menuClassName = `${className} ${isMobileMenuOpen ? "open" : ""}`;
	const showCart = !isMobileMenuOpen ? <ShoppingCart /> : "SHOPPING CART";
	const isMobileMenu =
		isMobileMenuOpen !== undefined ? menuClassName : className;
	const { currentUser } = useContext(UserContext);

	const showSignInOrSignOut = currentUser ? (
		<span>SIGN OUT</span>
	) : (
		<span>SIGN IN</span>
	);

	const closePopup = () => {
		setIsPopupOpen(false);
	};

	const signOutAndClosePopup = () => {
		signOutUser();
		setIsPopupOpen(false);
	};
	const closeMobileMenu = () => {
		if (setIsMobileMenuOpen) setIsMobileMenuOpen(false);
	};
	const allowSwitchRoute = (e: React.MouseEvent<HTMLElement>) => {
		if (currentUser) {
			e.preventDefault();
			setIsPopupOpen(true);
		}
	};

	const navLinks = [
		{
			route: ROUTES.SHOP,
			content: <span>SHOP</span>,
		},
		{
			route: ROUTES.CONTACTS,
			content: <span>CONTACTS</span>,
		},
		{
			route: ROUTES.SIGN_IN,
			content: showSignInOrSignOut,
			allowSwitchRoute: allowSwitchRoute,
		},
		{
			route: ROUTES.SHOPPING_CART,
			content: showCart,
		},
	];
	return (
		<>
			<div className={isMobileMenu}>
				{navLinks.map(({ route, content, allowSwitchRoute }, index) => (
					<NavigationItemComponent
						key={index}
						route={route}
						allowSwitchRoute={allowSwitchRoute}
					>
						{content}
					</NavigationItemComponent>
				))}
			</div>
			{isMobileMenuOpen && (
				<div onClick={closeMobileMenu} className="overlay" />
			)}
			<PopupComponent isOpen={isPopupOpen} onClose={closePopup}>
				<h2>Are you sure you want to sign out ?</h2>
				<div className="popup-content__buttons">
					<ButtonComponent onClick={signOutAndClosePopup}>Yes</ButtonComponent>
					<ButtonComponent onClick={closePopup}>No</ButtonComponent>
				</div>
			</PopupComponent>
		</>
	);
};

export default MenuComponent;
