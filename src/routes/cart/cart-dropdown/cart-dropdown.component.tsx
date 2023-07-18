import { useContext } from "react";

import ButtonComponent from "../../../components/button/button.component.tsx";
import { CartContext } from "../../../contexts/cart.context.tsx";

import "./cart-dropdown.styles.scss";
import CartItemComponent from "../cart-item/cart-item.component.tsx";

const CartDropdownComponent = () => {
	const { cartProducts } = useContext(CartContext);

	return (
		<div className="cart-dropdown">
			<div className="cart-dropdown__items">
				{cartProducts.length === 0 && <span>Your cart is empty</span>}
				{cartProducts.map((cartProduct) => (
					<CartItemComponent
						key={cartProduct.id}
						cartProductWithCount={cartProduct}
					/>
				))}
			</div>
			<ButtonComponent>GO TO CHECKOUT</ButtonComponent>
		</div>
	);
};

export default CartDropdownComponent;
