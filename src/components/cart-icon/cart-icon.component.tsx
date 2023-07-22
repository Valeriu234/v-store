import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context.tsx";

import shoppingCart from "../../assets/shopping-cart.png";
import "./cart-icon.styles.scss";

const CartIconComponent = () => {
	const { cartProducts } = useContext(CartContext);
	return (
		<div className="cart-icon">
			<img src={shoppingCart} alt={shoppingCart} width={50} height={50} />
			<span className="cart-icon__count">{cartProducts.length}</span>
		</div>
	);
};

export default CartIconComponent;
