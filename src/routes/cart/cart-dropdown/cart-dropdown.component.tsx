import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../../contexts/cart.context.tsx";
import ButtonComponent from "../../../components/button/button.component.tsx";
import CartDropdownItemComponent from "../cart-dropdownItem/cart-dropdownItem.component.tsx";

import "./cart-dropdown.styles.scss";

const CartDropdownComponent = () => {
	const { cartProducts, setIsCartOpen } = useContext(CartContext);

	const isButtonDisabled = !cartProducts.length;

	const navigation = useNavigate();

	const goToCheckoutHandler = () => {
		navigation("/shopping-cart");
		setIsCartOpen(false);
	};

	return (
		<div className="cart-dropdown">
			<div className="cart-dropdown__items">
				{cartProducts.length === 0 && <span>Your cart is empty</span>}
				{cartProducts.map((cartProduct) => (
					<CartDropdownItemComponent
						key={cartProduct.id}
						cartProductWithCount={cartProduct}
					/>
				))}
			</div>
			<ButtonComponent
				disabled={isButtonDisabled}
				onClick={goToCheckoutHandler}
			>
				GO TO CHECKOUT
			</ButtonComponent>
		</div>
	);
};

export default CartDropdownComponent;
