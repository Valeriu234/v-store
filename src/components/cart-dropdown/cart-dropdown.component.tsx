import ButtonComponent from "../button/button.component.tsx";

import "./cart-dropdown.styles.scss";

const CartDropdownComponent = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-dropdown__items"></div>
			<ButtonComponent>GO TO CHECKOUT</ButtonComponent>
		</div>
	);
};

export default CartDropdownComponent;
