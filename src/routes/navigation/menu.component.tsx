import React, { useContext, useState } from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils.js";

import { UserContext } from "../../contexts/user.context.tsx";
import { CartContext } from "../../contexts/cart.context.tsx";
import NavigationItemComponent from "./navigation-item.component.tsx";
import PopupComponent from "../../components/popup/popup.component.tsx";
import ButtonComponent from "../../components/button/button.component.tsx";
import CartDropdownComponent from "../../components/cart-dropdown/cart-dropdown.component.tsx";
import CartIconComponent from "../../components/cart-icon/cart-icon.component.tsx";

import { ROUTES } from "../routes.constants.ts";

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
	const { currentUser } = useContext(UserContext);
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const menuClassName = `${className} ${isMobileMenuOpen ? "open" : ""}`;

	const showCartIconOrText = !isMobileMenuOpen ? (
		<CartIconComponent />
	) : (
		"SHOPPING CART"
	);
	const showCart = currentUser ? showCartIconOrText : null;

	const isMobileMenu =
		isMobileMenuOpen !== undefined ? menuClassName : className;

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
	const allowSwitchCartRoute = (e: React.MouseEvent<HTMLElement>) => {
		if (currentUser) {
			e.preventDefault();
			setIsCartOpen(!isCartOpen);
		}
	};
	const allowSwitchSignUpRoute = (e: React.MouseEvent<HTMLElement>) => {
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
			allowSwitchRoute: allowSwitchSignUpRoute,
		},
		{
			route: ROUTES.SHOPPING_CART,
			content: showCart,
			allowSwitchRoute: allowSwitchCartRoute,
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
			{isCartOpen && <CartDropdownComponent />}
		</>
	);
};

export default MenuComponent;
