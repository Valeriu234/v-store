import { ReactComponent as ShoppingCart } from "../../assets/shopping-cart.svg";

import "./cart-icon.styles.scss";

const CartIconComponent = () => {
	return (
		<div className="cart-icon">
			<ShoppingCart />
			<span className="cart-icon__count">0</span>
		</div>
	);
};

export default CartIconComponent;
