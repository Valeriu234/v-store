import { useContext } from "react";

import { CartContext } from "../../../contexts/cart.context.tsx";
import CartItemComponent from "../cart-item/cart-item.component.tsx";

import "./cart.styles.scss";

const CartComponent = () => {
	const cartHeaders = ["Product", "Description", "Quantity", "Price", "Remove"];
	const {
		cartProducts,
		incrementProductByOne,
		decrementProductByOne,
		deleteProductFromCart,
	} = useContext(CartContext);

	return (
		<div className="cart">
			<div className="cart__headers">
				{cartHeaders.map((title) => (
					<span className="headers__item">{title}</span>
				))}
			</div>
			<div className="cart__products">
				{cartProducts.map((cartProduct) => (
					<CartItemComponent
						product={cartProduct}
						decrementProductByOne={decrementProductByOne}
						deleteProductFromCart={deleteProductFromCart}
						incrementProductByOne={incrementProductByOne}
					/>
				))}
			</div>
		</div>
	);
};

export default CartComponent;
