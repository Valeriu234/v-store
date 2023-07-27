import { useContext } from "react";

import { CartContext } from "../../../contexts/cart.context.tsx";
import CartItemComponent from "../cart-item/cart-item.component.tsx";
import PaymentFormComponent from "../../../components/payment-form/payment-form.component.tsx";

import "./cart.styles.scss";

const CartComponent = () => {
	const cartHeaders = ["Product", "Description", "Quantity", "Price", "Remove"];
	const {
		cartProducts,
		incrementProductByOne,
		decrementProductByOne,
		deleteProductFromCart,
		productsSum,
	} = useContext(CartContext);

	return (
		<div className="cart">
			<div className="cart__headers">
				{cartHeaders.map((title, index) => (
					<span key={index} className="headers__item">
						{title}
					</span>
				))}
			</div>
			<div className="cart__products">
				{cartProducts.map((cartProduct) => (
					<CartItemComponent
						product={cartProduct}
						decrementProductByOne={decrementProductByOne}
						deleteProductFromCart={deleteProductFromCart}
						incrementProductByOne={incrementProductByOne}
						key={cartProduct.id}
					/>
				))}
			</div>
			<div className="cart__bottom-items">
				<h1 className="cart__total-sum">Total : {productsSum} $</h1>
				<PaymentFormComponent />
			</div>
		</div>
	);
};

export default CartComponent;
